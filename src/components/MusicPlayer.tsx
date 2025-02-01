"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(0.5)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number.parseFloat(e.target.value)
        setVolume(newVolume)
    }

    return (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
            <audio ref={audioRef} src="/music/fight-song.mp3" loop />
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="bg-black text-white px-4 py-2 rounded-full mb-2"
            >
                {isPlaying ? "Pause" : "Play"} Music
            </motion.button>
            <div className="flex items-center">
                <span className="mr-2">Volume:</span>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full"
                />
            </div>
        </div>
    )
}


"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Hero() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4 sm:px-6">
            <div className="text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                    animate={
                        isExpanded
                            ? {
                                scale: [1, 1.2, 1],
                                transition: { duration: 0.5 },
                            }
                            : {}
                    }
                >
                    Happy Birthday, My Love
                </motion.h1>
                <motion.p
                    className="text-lg sm:text-xl mb-8"
                    animate={
                        isExpanded
                            ? {
                                y: [0, 20, 0],
                                transition: { duration: 0.5 },
                            }
                            : {}
                    }
                >
                    Celebrating you today and always
                </motion.p>
                <motion.button
                    className="px-6 py-3 bg-white text-black rounded-full text-base sm:text-lg font-semibold hover:bg-gray-200 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? "Hide surprise" : "Click for a surprise!"}
                </motion.button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-8 text-center"
                        >
                            <p className="text-xl mb-4">You are the light of my life!</p>
                            <div className="flex justify-center space-x-4">
                                {["❤️", "🎉", "🎂", "🌟"].map((emoji, index) => (
                                    <motion.span
                                        key={index}
                                        className="text-4xl"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [0, 1.2, 1] }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {emoji}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}


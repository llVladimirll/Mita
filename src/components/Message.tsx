"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Message() {
    const [isRevealed, setIsRevealed] = useState(false)

    return (
        <section id="message" className="py-12 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">A Message for You</h2>
                <div className="max-w-2xl mx-auto text-center">
                    {!isRevealed ? (
                        <motion.button
                            className="px-6 py-3 bg-black text-white rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsRevealed(true)}
                        >
                            Click to reveal my message
                        </motion.button>
                    ) : (
                        <motion.p
                            className="text-base sm:text-lg md:text-xl leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Sayaaangkuu selamat ulang tahun aku selalu cinta ama kamu. Cinta ku ke kamu gabakal pernah berkurang gabakal pernah ilang. Aku bakal selalu nemenin kamu setiap saat. Aku bakal selalu disisi kamu setiap saat.
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    )
}


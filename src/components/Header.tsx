"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
            <nav className="container mx-auto px-4 sm:px-6 py-3">
                <div className="flex justify-between items-center">
                    <span className="text-black text-lg sm:text-xl font-semibold">Happy Birthday, Mitaa</span>
                    <div className="hidden sm:flex space-x-4">
                        <a href="#message" className="text-black hover:text-gray-600 transition duration-300">
                            Message
                        </a>
                        <a href="#gallery" className="text-black hover:text-gray-600 transition duration-300">
                            Gallery
                        </a>
                    </div>
                    <button className="sm:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="sm:hidden bg-white"
                    >
                        <a
                            href="#message"
                            className="block py-2 px-4 text-black hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Message
                        </a>
                        <a
                            href="#gallery"
                            className="block py-2 px-4 text-black hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Gallery
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<{
        src: string;
        width: number;
        height: number;
    } | null>(null);


    const images = [
        { src: "/images/1.jpeg", width: 300, height: 400 },
        { src: "/images/2.jpeg", width: 400, height: 300 },
        { src: "/images/3.jpeg", width: 300, height: 500 },
        { src: "/images/4.jpeg", width: 300, height: 300 },
        { src: "/images/5.jpeg", width: 400, height: 400 },
        { src: "/images/6.jpeg", width: 500, height: 300 },
        { src: "/images/7.jpeg", width: 300, height: 400 },
        { src: "/images/8.jpeg", width: 400, height: 300 },
    ]

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        const handleKeyDown = (event: KeyboardEvent) => {  // Change here
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage]);


    return (
        <section id="gallery" className="py-12 sm:py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">Our Memories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            layoutId={`image-${index}`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img.src}
                                alt={`Memory ${index + 1}`}
                                width={img.width}
                                height={img.height}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    >
                        <motion.div
                            layoutId={`image-${images.indexOf(selectedImage)}`}
                            className="relative w-full max-w-3xl"
                        >
                            <Image
                                src={selectedImage.src}
                                alt="Selected memory"
                                width={selectedImage.width}
                                height={selectedImage.height}
                                className="rounded-lg w-full h-auto object-cover"
                            />
                            <motion.button
                                className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedImage(null)
                                }}
                            >
                                ×
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

"use client";
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Coffee,
    ArrowRight,
    Zap,
    Sparkles,
    ArrowLeft,
    Home,
} from 'lucide-react'

const NotFound = () => {
    const [glitchActive, setGlitchActive] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

    useEffect(() => {
        // Generate floating particles
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 2,
        }))
        setParticles(newParticles)

        // Glitch effect interval
        const glitchInterval = setInterval(() => {
            setGlitchActive(true)
            setTimeout(() => setGlitchActive(false), 200)
        }, 3000)

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            clearInterval(glitchInterval)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            {/* Dynamic background gradient following mouse */}
            <motion.div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, #ffda7520, transparent 40%)`,
                }}
            />

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-[#ffda75] rounded-full pointer-events-none"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Main content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4"
            >
                {/* 404 container */}
                <div className="relative mb-8">
                    {/* Main 404 text */}
                    <motion.h1
                        className="text-8xl md:text-9xl font-black bg-gradient-to-r from-[#ffda75] to-[#bd911a] bg-clip-text text-transparent select-none"
                        initial={{ scale: 0.8, rotateX: -15 }}
                        animate={{ scale: 1, rotateX: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        404
                    </motion.h1>

                    {/* Decorative elements */}
                    <motion.div
                        className="absolute -top-4 -right-4 text-[#ffda75]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                        <Zap className="h-8 w-8" />
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-4 -left-4 text-[#ffda75]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Sparkles className="h-6 w-6" />
                    </motion.div>
                </div>

                {/* Error message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        The page you&apos;re looking for seems to have vanished into the digital void. 
                        Don&apos;t worry though, even the best developers encounter 404s!
                    </p>
                </motion.div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <motion.button
                        onClick={() => window.location.href = '/'}
                        className="group flex items-center gap-3 rounded-xl bg-[#ffda75] px-8 py-4 text-black font-semibold transition-all hover:bg-[#e6c05a] hover:shadow-lg hover:shadow-[#ffda75]/25"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span>Take Me Home</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        onClick={() => window.history.back()}
                        className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Go Back</span>
                    </motion.button>
                </motion.div>

                {/* Fun fact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 backdrop-blur-sm">
                        <Coffee className="h-4 w-4 text-[#ffda75]" />
                        <span>Fun fact: 404 errors were named after room 404 at CERN</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Ambient lighting effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ffda75] opacity-10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#bd911a] opacity-10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />
        </div>
    )
}

export default NotFound;

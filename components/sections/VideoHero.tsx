'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface VideoHeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  videoSrc?: string
  posterSrc?: string
}

export function VideoHero({ title, subtitle, ctaText, ctaLink, videoSrc, posterSrc }: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#111111] to-[#1a1a1a]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
        {/* Video Controls */}
        {videoSrc && (
          <div className="absolute bottom-8 right-8 flex gap-3 z-20">
            <button
              onClick={togglePlay}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#C9A227]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
              Curated Living
            </span>
          </div>
          <h1 className="text-[clamp(3rem,10vw,6.5rem)] font-serif font-light leading-[0.9] text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg font-light leading-relaxed mb-10">
            {subtitle}
          </p>
          <motion.a
            href={ctaLink}
            className="inline-flex items-center gap-2 bg-[#C9A227] text-white px-10 py-4 text-sm tracking-wide uppercase font-sans font-medium hover:bg-[#C9A227]/90 transition-all hover:scale-105 shadow-lg shadow-[#C9A227]/30 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

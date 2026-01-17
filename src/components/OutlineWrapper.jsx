import React from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars

export default function OutlineWrapper({ children, className = '' }) {

  return (
    <div className={`relative ${className}`}>
      {/* Top */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 h-[1px] sm:h-[2px] bg-gradient-to-r from-accent via-accent/80 to-accent z-20"
      />

      {/* Right */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '100%', opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-[2px] bg-gradient-to-b from-accent via-accent/80 to-accent z-20"
      />

      {/* Bottom */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent/80 to-accent z-20"
      />

      {/* Left */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '100%', opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-accent via-accent/80 to-accent z-20"
      />

      {/* content wrapper with padding so lines don't overlap */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

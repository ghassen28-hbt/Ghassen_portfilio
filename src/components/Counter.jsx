import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars

export default function Counter({ value, duration = 2, label }) {
  const ref = useRef(null)
  const nodeRef = useRef(null)

  useEffect(() => {
    const numValue = parseInt(String(value).replace(/\D/g, '')) || 0
    let startValue = 0
    const increment = numValue / (duration * 60) // 60 FPS

    const counter = setInterval(() => {
      startValue += increment
      if (startValue >= numValue) {
        if (nodeRef.current) {
          nodeRef.current.textContent = String(value).includes('K') ? (numValue / 1000).toFixed(0) + 'K+' : value + '+'
        }
        clearInterval(counter)
      } else {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.floor(startValue) + '+'
        }
      }
    }, 1000 / 60)

    return () => clearInterval(counter)
  }, [value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="relative bg-gray-900/40 backdrop-blur-md p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-all">
        <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent mb-2">
          <span ref={nodeRef}>0</span>
        </div>
        <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">{label}</div>
      </div>
    </motion.div>
  )
}

import { useEffect, useState } from "react"
import { motion } from "framer-motion" // eslint-disable-line no-unused-vars

export default function Intro({ onFinish }) {
  const fullText = "Ghassen Mbarki student @ ISGT "
  const [display, setDisplay] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const speed = 40
    const t = setInterval(() => {
      setDisplay((s) => s + fullText.charAt(i))
      i++
      if (i >= fullText.length) {
        clearInterval(t)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (done) {
      const timeout = setTimeout(() => onFinish && onFinish(), 1400)
      return () => clearTimeout(timeout)
    }
  }, [done, onFinish])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-start px-6 lg:px-20 relative overflow-hidden"
    >
      {/* Background animated elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-accent leading-tight relative z-10"
      >
        <span className="typewriter">{display}</span>
        <motion.span 
          className="cursor"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          _
        </motion.span>
      </motion.h1>

      {/* Animated line under text */}
      <motion.div
        initial={{ width: 0 }}
        animate={done ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent mt-6 relative z-10"
        style={{ maxWidth: "400px" }}
      />

      {/* Loading dots */}
      {!done && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex gap-2 relative z-10"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
        </motion.div>
      )}
      
    </motion.section>
  )
}

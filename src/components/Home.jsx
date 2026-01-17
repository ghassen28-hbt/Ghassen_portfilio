import { useEffect, useState } from "react"
import { motion } from "framer-motion" // eslint-disable-line no-unused-vars
import { useTranslation } from "react-i18next"
import OutlineWrapper from "./OutlineWrapper"

export default function Home() {
  const { t } = useTranslation()
  const [displayName, setDisplayName] = useState("")
  const fullName = "Ghassen Mbarki"

  useEffect(() => {
    let i = 0
    const speed = 60
    const t = setInterval(() => {
      setDisplayName((s) => s + fullName.charAt(i))
      i++
      if (i >= fullName.length) {
        clearInterval(t)
      }
    }, speed)
    return () => clearInterval(t)
  }, [])

  const scrollVariants = {
    animate: {
      y: [0, 12, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center py-10">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 relative z-10">
        <OutlineWrapper className="p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-center">
            {/* Left - Main Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-12 lg:col-span-6"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 leading-tight text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-accent typewriter">{displayName}</span>
                <span className="text-accent cursor">_</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-lg"
              >
                {t('home.description')}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4 flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(56,189,248,0.16)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-accent text-black font-bold rounded-lg transition-all duration-300 hover:bg-accent/80"
                  onClick={() => {
                    const element = document.getElementById('projects');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('home.viewWork')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "rgba(56,189,248,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg transition-all duration-300 hover:bg-accent/10"
                  onClick={() => window.location.href = 'mailto:ghassenmbarki116@gmail.com'}
                >
                  {t('home.contactMe')}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="col-span-12 lg:col-span-6 flex justify-center items-center"
            >
              <motion.div
                className="profile-img relative w-full max-w-xs"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Top Border */}
                <div className="line-decoration-top absolute border-t-2 border-accent top-[10px] left-[10px] w-full"></div>
                
                {/* Left Border */}
                <div className="line-decoration-left absolute border-l-2 border-accent top-[10px] left-[10px] h-full w-full"></div>
                
                {/* Bottom Border */}
                <div className="line-decoration-bottom absolute border-b-2 border-accent bottom-[-10px] left-[10px] w-full h-full"></div>
                
                {/* Right Border */}
                <div className="line-decoration-right absolute border-r-2 border-accent top-[10px] right-[-10px] w-full h-full"></div>
                
                {/* Image */}
                <img
                  src="moi.png"
                  alt="Ghassen Mbarki"
                  className="w-full rounded-lg relative z-10"
                />
              </motion.div>
            </motion.div>
          </div>
        </OutlineWrapper>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        variants={scrollVariants}
        animate="animate"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="text-accent font-bold"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

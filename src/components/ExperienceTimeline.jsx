import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import { VerticalLine, GoldenDiamond } from './AnimatedLine'
import { useTranslation } from 'react-i18next'
import OutlineWrapper from './OutlineWrapper'

export default function ExperienceTimeline() {
  const { t } = useTranslation()
  const experiences = [
    {
      company: "Tech Startup",
      role: "Frontend Developer",
      period: "2022 - 2023",
      description: "Developed responsive web applications using React and Tailwind CSS.",
      side: "left"
    },
    {
      company: "Digital Agency",
      role: "Senior Developer",
      period: "2023 - 2024",
      description: "Led frontend team and implemented advanced animations with Framer Motion.",
      side: "right"
    },
    {
      company: "Current Company",
      role: "Lead Developer",
      period: "2024 - Present",
      description: "Building scalable web solutions and mentoring junior developers.",
      side: "left"
    }
  ]

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.5 + custom * 0.6, 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 50, rotate: 5 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { delay: 0.7 + custom * 0.6, duration: 0.6, ease: "easeOut" }
    })
  }

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <OutlineWrapper className="p-6 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-20 text-center text-accent"
          >
            <span className="gold-line-container inline-block">{t('experience.title')}</span>
          </motion.h2>

          <div className="relative">
          {/* Center Vertical Line with Animation */}
              <div className="absolute left-1/2 top-0 h-full w-1 transform -translate-x-1/2 flex flex-col items-center">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-accent to-transparent"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex gap-8 ${exp.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Content - 40% width */}
                <motion.div
                  className="w-5/12"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-gray-900/40 backdrop-blur-md p-6 rounded border border-accent/30 hover:border-accent/80 transition-all duration-300 group overflow-hidden relative"
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(56,189,248,0.15)" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="text-accent font-semibold mb-2 relative z-10"
                      whileHover={{ letterSpacing: "0.05em" }}
                    >
                      {exp.period}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-1 relative z-10">{exp.role}</h3>
                    <div className="text-gray-400 mb-3 relative z-10">{exp.company}</div>
                    <p className="text-gray-300 text-sm leading-relaxed relative z-10">{exp.description}</p>
                  </motion.div>
                </motion.div>

                {/* Center Dot - 20% width */}
                  <motion.div
                    className="w-1/5 flex justify-center pt-6"
                    custom={index}
                    variants={dotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                  <motion.div
                    className="w-6 h-6 bg-accent rounded-full border-4 border-black relative z-10 accent-glow cursor-pointer"
                    whileHover={{ scale: 1.6, boxShadow: "0 0 25px rgba(56,189,248,0.9)" }}
                    animate={{ 
                      boxShadow: ["0 0 10px rgba(56,189,248,0.5)", "0 0 20px rgba(56,189,248,0.8)", "0 0 10px rgba(56,189,248,0.5)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  </motion.div>

                {/* Empty Space - 40% width */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
          </div>
        </OutlineWrapper>
      </div>
    </motion.section>
  )
}

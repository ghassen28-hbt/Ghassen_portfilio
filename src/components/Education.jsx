import { motion } from "framer-motion" // eslint-disable-line no-unused-vars
import { useTranslation } from "react-i18next"
import OutlineWrapper from './OutlineWrapper'

export default function Education() {
  const { t } = useTranslation()
  const educationList = [
    {
    title: "High School Diploma in Computer Science",
    subtitle: "Tunis • 2023",
    description: "Secondary education with a specialization in computer science and fundamental digital technologies."
  },
  {
    title: "Bachelor’s Degree in Management Information Systems – 1st Year",
    subtitle: "ISGT – University of Tunis • 2023–2024",
    description: "Focused on core foundations in computer science, algorithms, programming, mathematics, and management principles."
  },
  {
    title: "Bachelor’s Degree in Management Information Systems – 2nd Year",
    subtitle: "ISGT – University of Tunis • 2024–2025",
    description: "Advanced studies in databases, information systems, business processes, and software development."
  },
  {
    title: "Bachelor’s Degree in Management Information Systems – 3rd Year",
    subtitle: "ISGT – University of Tunis • 2025–2026",
    description: "Specialization in business information systems, application development, system analysis, and IT project management."
  }
  ]
    
  return (
      <section id="education" className="relative py-10">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <OutlineWrapper className="p-8 md:p-12 lg:p-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-12 text-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('education.title')}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/40 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded border border-accent/30 cursor-pointer hover:border-accent/60 transition-all duration-300"
              >
                <motion.h3
                  className="text-base sm:text-lg md:text-xl font-semibold text-accent mb-2"
                  initial={{ color: "#38BDF8" }}
                  whileHover={{ color: "#38BDF8" }}
                >
                  {edu.title}
                </motion.h3>
                <p className="text-gray-400 text-sm md:text-base">{edu.subtitle}</p>
                <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </OutlineWrapper>
      </div>
    </section>
  )
}

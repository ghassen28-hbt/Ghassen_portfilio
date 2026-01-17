import { motion } from "framer-motion" // eslint-disable-line no-unused-vars
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import OutlineWrapper from './OutlineWrapper'

export default function Contact() {
  const { t } = useTranslation()
  const socialLinks = [
    { icon: "github", url: "https://github.com/ghassen28-hbt/", label: "GitHub" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/ghassen-mbarki-593ba8322/", label: "LinkedIn" },
    { icon: "instagram", url: "https://www.instagram.com/mbarki_ghassen_/", label: "Instagram" },
    { icon: "email", url: "mailto:ghassenmbarki116@gmail.com", label: "Email" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: custom * 0.1, 
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  }

  return (
    <section id="contact" className="relative py-10">
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
            {t('contact.title')}
          </motion.h2>
          <div className="flex flex-col justify-center items-center gap-6">
           

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex gap-6 justify-center items-center flex-wrap"
              variants={containerVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.icon}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                  className="cursor-pointer"
                  aria-label={link.label}
                >
                  <motion.div 
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-accent flex items-center justify-center hover:bg-accent transition-colors group relative overflow-hidden"
                    whileHover={{ boxShadow: "0 0 20px rgba(56,189,248,0.5)" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-accent group-hover:text-black text-lg relative z-10">
                      {link.icon === "github" && <FaGithub size={24} />}
                      {link.icon === "linkedin" && <FaLinkedin size={24} />}
                      {link.icon === "instagram" && <FaInstagram size={24} />}
                      {link.icon === "email" && <FaEnvelope size={24} />}
                    </span>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </OutlineWrapper>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import { VerticalLine, HorizontalLine, GoldenDiamond } from './AnimatedLine'
import { useTranslation } from 'react-i18next'
import OutlineWrapper from './OutlineWrapper'

export default function TechnologyTree() {
  const { t } = useTranslation()
  const categories = [
    {
      name: "LANGUAGES",
      items: ["HTML/CSS", "JavaScript", "TypeScript", "JAVA", "Python", "PHP"]
    },
    {
      name: "FRAMEWORKS",
      items: ["SpringBoot", "Angular", "React", "Django", "Node.js" , "Express.js"]
    },
    {
      name: "TOOLS",
      items: ["Jenkins", "GIT/GitHub", "Docker"]
    }
  ]

  const titleVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.8 + custom * 0.3, ease: "easeOut" }
    })
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, delay: 1.3 + custom * 0.08, ease: "easeOut" }
    })
  }

  return (
    <section id="technologies" className="relative py-10">
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
            <span className="gold-line-container inline-block">{t('technologies.title')}</span>
          </motion.h2>

        <div className="flex flex-col gap-20">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2, duration: 0.6 }}
              className="flex gap-6 items-start"
            >
              {/* Left Column - Animated Line */}
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <GoldenDiamond />
                <VerticalLine height="h-32" />
              </div>

              {/* Middle Column - Horizontal Line & Title */}
              <div className="pt-1">
                <div className="flex items-center gap-4 mb-8">
                  <HorizontalLine width="w-12" />
                  <motion.h3
                    className="text-2xl font-bold text-accent tracking-wider uppercase"
                    custom={catIndex}
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.name}
                  </motion.h3>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      custom={itemIndex}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -5, 
                        borderColor: "#38BDF8",
                        backgroundColor: "rgba(56,189,248,0.08)"
                      }}
                      className="bg-gray-900/40 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded border border-accent/30 hover:border-accent transition-all duration-300 text-center text-xs sm:text-sm font-semibold cursor-pointer"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </OutlineWrapper>
      </div>
    </section>
  )
}

import { motion } from "framer-motion" // eslint-disable-line no-unused-vars
import { useTranslation } from "react-i18next"
import OutlineWrapper from "./OutlineWrapper"

export default function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projects" className="relative py-10">
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
            {t("projects.title")}
          </motion.h2>

          <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Portfolio */}
            <ProjectCard
              title={t("projects.portfolio.title")}
              description={t("projects.portfolio.description")}
              link="https://github.com/ghassen28-hbt/Ghassen_portfilio.git"
              direction="left"
              t={t}
            />

            {/* Ecommerce */}
            <ProjectCard
              title={t("projects.ecommerce.title")}
              description={t("projects.ecommerce.description")}
              link="https://github.com/ghassen28-hbt/ecommerce_pwa.git"
              direction="right"
              t={t}
            />

            {/* Quiz */}
            <ProjectCard
              title={t("projects.quiz.title")}
              description={t("projects.quiz.description")}
              link="https://github.com/ghassen28-hbt/quiz-game-.git"
              direction="left"
              t={t}
            />

            {/* HelpHub */}
            <ProjectCard
              title={t("projects.helpHub.title")}
              description={t("projects.helpHub.description")}
              link="https://github.com/ghassen28-hbt/projet-HelpHub.git"
              direction="right"
              t={t}
            />
          </div>
        </OutlineWrapper>
      </div>
    </section>
  )
}

/* 🔹 Composant réutilisable */
function ProjectCard({ title, description, link, direction, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -30 : 30, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="project-card bg-gray-900/40 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded border border-accent/30"
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-accent">
        {title}
      </h3>

      <p className="text-gray-400 text-sm sm:text-base">
        {description}
      </p>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary mt-4 w-full text-sm sm:text-base"
        onClick={() => window.open(link, "_blank")}
      >
        {t("projects.viewCode")}
      </motion.button>
    </motion.div>
  )
}

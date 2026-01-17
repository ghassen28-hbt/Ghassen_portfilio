import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        right: 'max(3.5rem, calc(1vw + 3.5rem))',
        top: 'max(0.5rem, 1vh)',
        zIndex: 60,
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        background: 'rgba(255,255,255,0.03)',
        color: 'var(--color-text)',
        border: '1px solid rgba(255,255,255,0.04)',
        backdropFilter: 'blur(6px)',
        fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
        fontWeight: '600',
        letterSpacing: '0.05em',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minWidth: '2.5rem',
        minHeight: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {i18n.language === 'en' ? 'FR' : 'EN'}
    </motion.button>
  )
}

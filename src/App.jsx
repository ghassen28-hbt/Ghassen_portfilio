import { useState } from 'react'
import './App.css'
import ParticlesBackground from "./components/ParticlesBackground"
import ThemeToggle from "./components/ThemeToggle"
import LanguageSwitcher from "./components/LanguageSwitcher"
import Intro from "./components/Intro2"
import Home from "./components/Home"
import TechnologyTree from "./components/TechnologyTree"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import './i18n/config'

function App() {
   const [showIntro, setShowIntro] = useState(true)

 return (
    <>
      <ThemeToggle />
      <LanguageSwitcher />
      <ParticlesBackground />
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Home />
          <Education />
          <TechnologyTree />
          <Projects />
          <Contact />
        </>
      )}
    </>
  )
}

export default App

import { useEffect, useState } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

const ParticlesBackground = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    loadSlim()
      .then(() => {
        setReady(true)
      })
      .catch((err) => {
        console.error('Failed to load particles:', err)
        setReady(true) // Still show the page even if particles fail
      })
  }, [])

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "#050505" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.1, max: 0.7 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: { value: { min: 0.5, max: 1.5 } },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
          },
          modes: {
            bubble: {
              size: 4,
              distance: 200,
              duration: 2,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesBackground

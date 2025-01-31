"use client"

import { motion } from "framer-motion"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"

const Hero = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-5xl font-bold mb-4">Kuldeep Paul</h1>
        <h2 className="text-2xl text-gray-300 mb-8">Product Manager & Data Scientist</h2>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <a
            href="mailto:kuldeep.paul08@gmail.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero


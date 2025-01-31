"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}


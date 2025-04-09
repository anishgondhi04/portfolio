"use client"

import { useState, useEffect } from "react"
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

// Wrapper component to handle scroll tracking
const ScrollTracker = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const location = useLocation()

  // Update active section based on current route
  useEffect(() => {
    const path = location.pathname === "/" ? "hero" : location.pathname.substring(1)
    setActiveSection(path)
  }, [location])

  // For homepage, track scroll position to update active section
  useEffect(() => {
    if (location.pathname !== "/") return

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Router>
          <ScrollTracker />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App

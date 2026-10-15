import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const prefersLessMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersLessMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

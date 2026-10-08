import Navbar from './components/Navbar.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'

function App() {
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

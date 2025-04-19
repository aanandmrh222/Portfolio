import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import EmailJSScript from "./components/EmailJSScript"
import ScrollProgress from "./components/ScrollProgress"
import BackToTop from "./components/BackToTop"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
    })
  }, [])

  return (
    <div className="font-sans overflow-hidden bg-black">
      <ScrollProgress />
      <Navbar />
      <div className="flex flex-col">
        <Home />
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Skills />
        </div>
        <div data-aos="fade-up">
          <Projects />
        </div>
        <div data-aos="fade-up">
          <Certifications />
        </div>
        <div data-aos="fade-up">
          <Contact />
        </div>
      </div>
      <BackToTop />
      <EmailJSScript />
    </div>
  )
}

export default App


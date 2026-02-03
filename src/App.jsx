import Background3D from './components/Background3D'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import WhyChooseMe from './sections/WhyChooseMe'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <>
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

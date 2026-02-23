import Navbar from './components/HUD'
import Hero from './components/Hero'
import Journey from './components/QuestLog'
import Skills from './components/SkillTree'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App

import { AnimatedBackground } from './components/AnimatedBackground'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Experience } from './pages/Experience'
import { Highlights } from './pages/Highlights'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f2efe8] text-[#171512]">
      <AnimatedBackground />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Highlights />
      <Contact />
    </main>
  )
}

export default App

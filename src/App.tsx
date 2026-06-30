import { AnimatedBackground } from './components/AnimatedBackground'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Home } from './pages/Home'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f2efe8] text-[#171512]">
      <AnimatedBackground />
      <Navbar />
      <Home />
      <About />
      <Experience />
    </main>
  )
}

export default App

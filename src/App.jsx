import Dock from "#components/Dock"
import NavBar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Terminal from "#windows/terminal"


import { Draggable } from "gsap/Draggable"
import { gsap } from "gsap"




gsap.registerPlugin(Draggable);


const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      {/* Windows */}
      <Terminal />
    </main>
  )
}

export default App 
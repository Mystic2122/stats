import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <h1>Welcome to Stats Haven</h1>
      
      <nav>
        <a href="/">Home</a>
        <a href="/notes">Notes</a>
        <a href="/calculators">Calculators</a>
      </nav>
    </header>
  )
}

export default App

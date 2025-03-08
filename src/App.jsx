import { useState } from 'react'
import './App.css'
import GameEntry from './components/GameEntry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GameEntry/>
    </>
  )
}

export default App

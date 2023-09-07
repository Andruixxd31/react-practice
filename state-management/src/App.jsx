import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
    
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <Button onClick={() => handleClick()}/>
      </div>
    </>
  )
}

export default App

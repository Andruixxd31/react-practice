import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
    
  const handleCountChange = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <h2>General Count: {count}</h2>
        <Button count={count} handleCountChange={() => handleCountChange()}/>
      </div>
    </>
  )
}

export default App

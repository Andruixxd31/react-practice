import { useState } from 'react'
import './App.css'
import DogPage from './pages/DogPage'
import { DogContextProvider } from './context/DogContext'

function App() {
  return (
    <>
      <DogContextProvider>
        <DogPage/>
      </DogContextProvider>
    </>
  )
}

export default App

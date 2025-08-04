// hook
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

// componentes
import NavBar from './components/NavBar'


//estilos
import './App.css'

function App() {

  return (
    <>
        <div><NavBar />
        <Outlet /></div>
    </>
  )
}

export default App

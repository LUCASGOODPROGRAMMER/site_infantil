// hook
import { Outlet } from 'react-router-dom'

// componentes
import NavBar from './components/NavBar'

import BarNavigation from './components/BarNavigation'


//estilos
import './App.css'




function App() {


  return (
    <>
        <NavBar />
        <BarNavigation/>
        <Outlet />
    </>
  )
}

export default App

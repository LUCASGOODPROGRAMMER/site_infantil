// hook
import { Outlet } from 'react-router-dom'

// componentes
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import BarNavigation from './components/BarNavigation'


//estilos
import './App.css'




function App() {

  return (
    <>
        <NavBar />
        <SearchForm />
        <BarNavigation/>
        <Outlet />
    </>
  )
}

export default App

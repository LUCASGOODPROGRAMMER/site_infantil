// hook
import { Outlet } from 'react-router-dom'

// componentes
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import Cards from './components/Cards'


//estilos
import './App.css'



function App() {

  return (
    <>
        <NavBar />
        <SearchForm />
        <Cards/>
        <Outlet />
    </>
  )
}

export default App

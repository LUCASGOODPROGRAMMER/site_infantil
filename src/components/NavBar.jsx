// hooks
import {Link, NavLink} from 'react-router-dom'

//componentes

//imagens
import people from '../imgs/navbar/people.svg'

// estilos
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
       <button id="disparar_menu"><img alt="menu_icon" /></button>
       <div>
        <img src={people}  alt="" />
        <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>login</NavLink>
       </div>
    </nav>
  )
}

export default NavBar
// hooks
import {Link, NavLink} from 'react-router-dom'

//componentes

//imagens
import binoculo from '../imgs/navbar/binoculo.svg'
import bird from '../imgs/navbar/bird.svg'
import people from '../imgs/navbar/people.svg'

// estilos
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
       <button id="disparar_menu"><img alt="menu_icon" /></button>
       <div id="search_bar">
          <img src={binoculo} alt="search-icon" />
          <input type="text" placeholder="pesquisar"/>
          {/** <img src> */}
       </div>
       <div>
        <img src={people}  alt="" />
        <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>login</NavLink>
       </div>
    </nav>
  )
}

export default NavBar
// hooks
import { useNavigate } from 'react-router-dom'

//componentes

//imagens
import people from '../imgs/navbar/people.svg'

// estilos
import './NavBar.css'
const NavBar = () => {
  const navigate = useNavigate()
  const activeLogin = () => {
    navigate("login")
  }
  return (
    <nav>
       <button id="disparar_menu"><img alt="menu_icon" /></button>
       <div>
        <img src={people}  alt="" />
        <button id="btn-login" onClick={activeLogin}>login</button>
       </div>
    </nav>
  )
}

export default NavBar
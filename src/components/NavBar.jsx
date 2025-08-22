// hooks
import { useNavigate } from 'react-router-dom'

//componentes
import MenuDoAdmin from '../components/MenuDoAdmin.jsx'

//imagens
import people from '../imgs/navbar/people.svg'

// estilos
import './NavBar.css'
const NavBar = () => {
  const navigate = useNavigate()
  const activeLogin = () => {
    navigate("/login")
  }
  return (
    <nav>
       <MenuDoAdmin />
       <div>
        <img src={people}  alt="" />
        <button id="btn-login" onClick={activeLogin}>login</button>
       </div>
    </nav>
  )
}

export default NavBar
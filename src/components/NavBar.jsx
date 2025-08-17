// hooks
import { useNavigate } from 'react-router-dom'

//componentes
import MenuAdmin from '../components/MenuAdmin.jsx'

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
       <MenuAdmin />
       <div>
        <img src={people}  alt="" />
        <button id="btn-login" onClick={activeLogin}>login</button>
       </div>
    </nav>
  )
}

export default NavBar
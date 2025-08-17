import { NavLink } from "react-router-dom"
import { useState } from 'react'

const MenuAdmin = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <div>
        <nav className="nav-menu">
          <button>
            <img src="" alt="" />
          </button>
          <div className="menu-suspend">
            <NavLink to="/cards/addCard">Gerenciar Cards</NavLink>
          </div>
        </nav>
    </div>
  )
}

export default MenuAdmin
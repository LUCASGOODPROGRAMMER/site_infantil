import { NavLink } from "react-router-dom"
import { useState} from 'react'

const NavBarEdit = () => {
const [menuOpen, setMenuOpen] = useState(false) // abertura do menu
    const [isClose, setIsClose] = useState(false) // saida do menu

    const toggleMenu = () => {
        if (menuOpen) {
            setIsClose(true)
            setTimeout(() => {
                setMenuOpen(false)
                setIsClose(false)
            }, 400) // tempo igual ao tempo da ttransição
        } else {
            setMenuOpen(true)
        }
    }

    return (
        <div id="container-nav">
            <div id="container-out">
                <button onClick={toggleMenu}>
                    <img src="" alt="Menu" />
                </button>
                {/* usando if ternário, uma pergunta de true e false*/}
                <nav
                    className={`nav-links ${menuOpen ? "open" : ""} ${isClose ? "closing" : ""} bar-navigation`}
                >
                    <NavLink to={`cards/${card.id}`}>Cards</NavLink>
                </nav>
            </div>

        </div>
    )
}

export default NavBarEdit
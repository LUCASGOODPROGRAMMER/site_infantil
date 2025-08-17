import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./BarNavigation.css"
import SearchForm from "./SearchForm"

import Menu from '../imgs/barnavigation/menu.png'

const BarNavigation = () => {
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
            <SearchForm />
            <div id="container-out">
                <button onClick={toggleMenu}>
                    <img src={Menu} alt="Menu" />
                </button>
                {/* usando if ternário, uma pergunta de true e false*/}
                <nav
                    className={`nav-links ${menuOpen ? "open" : ""} ${isClose ? "closing" : ""} bar-navigation`}
                >
                    <NavLink to="/">Cards</NavLink>
                    <NavLink to="atividades">Atividades</NavLink>
                    <NavLink to="material">Material</NavLink>
                    <NavLink to="quiz">Quiz</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default BarNavigation

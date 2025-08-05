import { NavLink } from "react-router-dom"
// BarNavigation.jsx
import "./BarNavigation.css"
import SearchForm from "./SearchForm"

const BarNavigation = () => {


    return (
        <>
            <div id="bar-navigation">
                <SearchForm />
                <NavLink
                    to="cards"
                >
                    Cards
                </NavLink>
                <NavLink
                    to="atividades"

                >
                    Atividades
                </NavLink>
                <NavLink
                    to="material"
                >
                    Material
                </NavLink>
                <NavLink
                    to="quiz"
                >
                    Quiz
                </NavLink>

            </div>


        </>
    )
}

export default BarNavigation

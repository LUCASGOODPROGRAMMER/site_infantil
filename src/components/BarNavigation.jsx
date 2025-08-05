// BarNavigation.jsx
import { useState } from "react"
import Cards from "./Cards"
//import Atividades from "./Atividades"
//import Material from "./Material"
//import Quiz from "./Quiz"
import "./BarNavigation.css"

const BarNavigation = () => {
    const [section, setSection] = useState("0")

    const renderSection = () => {
        switch (section) {
            case "0":
                return <Cards />
            case "1":
                return <Atividades />
            case "2":
                return <Material />
            case "3":
                return <Quiz />
            default:
                return <p>Seção não encontrada.</p>
        }
    }

    return (
        <>
            <div id="bar-navigation">
                <button 
                    onClick={() => setSection("0")} 
                    className={section === "0" ? "active" : ""}
                >
                    Cards
                </button>
                <button 
                    onClick={() => setSection("1")} 
                    className={section === "1" ? "active" : ""}
                >
                    Atividades
                </button>
                <button 
                    onClick={() => setSection("2")} 
                    className={section === "2" ? "active" : ""}
                >
                    Material
                </button>
                <button 
                    onClick={() => setSection("3")} 
                    className={section === "3" ? "active" : ""}
                >
                    Quiz
                </button>
            </div>

            <div id="section-content">
                {renderSection()}
            </div>
        </>
    )
}

export default BarNavigation

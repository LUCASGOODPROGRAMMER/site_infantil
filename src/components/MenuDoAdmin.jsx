import { NavLink, Link } from "react-router-dom";

import Home from "../imgs/navbar/home.png";

import "./MenuDoAdmin.css";
const MenuDoAdmin = () => {
  return (
    <div className="container-nav-main">
      <Link to="/">
        <img src={Home} alt="inicio" />
      </Link>
      <nav className={`nav-menu-main`}>
        <button>
          <img src="" alt="banana" />
        </button>
        <div className="options-admin">
          <NavLink to="GerenciarCards">Gerenciar Cards</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default MenuDoAdmin;

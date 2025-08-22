import { NavLink } from "react-router-dom";

import "./NavBarCards.css";

const NavBarCards = () => {
  return (
    <nav className="navbar-cards">
      <NavLink
        to=""
        end
        className={({ isActive }) =>
          isActive ? "navlink-cards navlinkActive" : "navlink-cards"
        }
      >
        exibir cards
      </NavLink>

      <NavLink
        to="adicionarCards"
        className={({ isActive }) =>
          isActive ? "navlink-cards navlinkActive" : "navlink-cards"
        }
      >
        adicionar cards
      </NavLink>
    </nav>
  );
};

export default NavBarCards;

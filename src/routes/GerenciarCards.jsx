import { Outlet, Navigate } from 'react-router-dom';
import NavBarCards from '../components/NavBarCards.jsx';
import './GerenciarCards.css'
const GerenciarCards = () => {
  const navigate = Navigate;
  navigate("exibirCards")

  

  return (
    <div className="edit-container">
      <NavBarCards/>
      <Outlet/>
    </div>
  );
};

export default GerenciarCards;

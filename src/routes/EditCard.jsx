import { useState, useEffect } from 'react';
import cardFetch from '../axios/config';
import { Outlet } from 'react-router-dom';
import NavBarEdit from '../components/NavBarEdit';


import './EditCard.css'
import { Link } from 'react-router-dom';

const FocusCard = () => {
  const [cards, setCards] = useState([]);

  const getPosts = async () => {
    try {
      const response = await cardFetch.get('/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Erro ao buscar cards:', error);
    } finally {
      console.log('Requisição executada');
    }
  };

  const deleteCard = async(id) => {
    try {
      const response = await cardFetch.delete(`/cards/${id}`)
      setCards(cards.filter((card) => card.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="edit-container">

      <Outlet/>
      {cards.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        
        cards.map((card) => (
          <div key={card.id} className="edit-card">
            <div className="edit-header">
              {card.rotaImg && <img src={card.rotaImg} alt={card.name} />}
              <h2>{card.name}</h2>
            </div>
            <div className="edit-options">
              <button onClick={() => deleteCard(card.id)}>Excluir</button>
              <Link to={`cards/${card.id}`}>editar</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FocusCard;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cardFetch from '../axios/config';

import './FocusCard.css'

const FocusCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});

  const getPost = async () => {
    try {
      console.log("Fetching card with ID:", id);
      const response = await cardFetch.get(`/cards/${id}`);
      setCard(response.data);
    } catch (error) {
      console.error("Erro ao buscar card:", error);
    } finally {
      console.log("executou");
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

return (
  <div className="card-container">
    {!card.name ? (
      <p>Carregando...</p>
    ) : (
      <div className="card-card">
        <div className="card-header">
          <img src={card.rotaImg} alt={card.name} />
          <h2>{card.name}</h2>
        </div>
        <p>{card.text}</p>
      </div>
    )}
  </div>
);

};

export default FocusCard;

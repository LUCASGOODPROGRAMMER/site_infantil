import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import cardFetch from "../axios/config";

import "./ExibirCards.css";

const ExibirCards = () => {
  const [cards, setCards] = useState([]);

  const getPosts = async () => {
    try {
      const response = await cardFetch.get("/cards");
      setCards(response.data);
    } catch (error) {
      console.error("Erro ao buscar cards:", error);
    } finally {
      console.log("Requisição executada");
    }
  };

  const deleteCard = async (id) => {
    try {
      setCards(cards.filter((card) => card.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="edit-cards-container">
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
              <Link to={`editarCards/${card.id}`}>editar</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ExibirCards;

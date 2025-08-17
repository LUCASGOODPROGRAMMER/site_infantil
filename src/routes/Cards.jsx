import cardFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Cards.css';

const Cards = () => {
  const [cards, setCards] = useState([])

  const getPosts = async () => {
    try {
      const response = await cardFetch.get("/cards")
      const data = response.data
      setCards(data)
    } catch (error) {
      console.log(error)
    } finally {
      console.log("processo executado")
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="gallery">
      {cards.length === 0 ? (
        <p>cargando dados</p>
      ) : (
        cards.map((card) => (
          <Link to={`/cards/${card.id}`} key={card.id}>
                      <div className="card" >
            <img src={card.rotaImg} alt={card.name} className="animal-img" />
            <h2 className="animal-name">{card.name}</h2>
          </div>
          </Link>

        ))
      )}
    </div>
  );
};

export default Cards;

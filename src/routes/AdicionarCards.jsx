import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardFetch from "../axios/config";
import './AdicionarCards.css'

const AdicionarCards = () => {
  const navigate = useNavigate();

  const [card, setCard] = useState({
    name: "",
    text: "",
    rotaImg: "",
  });

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      const response = await cardFetch.post("/cards", card);
      console.log("Card criado:", response.data);
      navigate("/GerenciarCards");
    } catch (error) {
      console.log("Erro ao criar card:", error);
    }
  };

  return (
    <div className="add-card">
      <h2>Adicionar Card</h2>
      <form className="add-card-form" onSubmit={sendPost}>
        <input
          type="text"
          name="name"
          placeholder="Nome do card"
          value={card.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text"
          placeholder="Texto do card"
          value={card.text}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rotaImg"
          placeholder="URL da imagem"
          value={card.rotaImg}
          onChange={handleChange}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AdicionarCards;

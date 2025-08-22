import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cardFetch from "../axios/config";
import "./EditarCards.css"; // importa o CSS

const EditarCards = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updateCard, setUpdateCard] = useState({
    name: "",
    text: "",
    rotaImg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateCard((prev) => ({ ...prev, [name]: value }));
  };

  const getPost = async () => {
    try {
      const response = await cardFetch.get(`/cards/${id}`);
      setUpdateCard(response.data);
    } catch (error) {
      console.error("Erro ao buscar card:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await cardFetch.put(`/cards/${id}`, updateCard);
      navigate("/GerenciarCards");
    } catch (error) {
      console.error("Erro ao atualizar card:", error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="container-update">
      <div className="editar-card">
        <h2>Atualizar Card</h2>
        <form className="update-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Título"
            value={updateCard.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="text"
            placeholder="Texto"
            value={updateCard.text}
            onChange={handleChange}
          />
          <input
            type="text"
            name="rotaImg"
            placeholder="Imagem (URL)"
            value={updateCard.rotaImg}
            onChange={handleChange}
          />
          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
      <img src={updateCard.rotaImg} alt="" />
    </div>
  );
};

export default EditarCards;

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import cardFetch from '../axios/config';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updateCard, setUpdateCard] = useState({
    name: "",
    text: "",
    rotaImg: "",
  });

  // Atualiza o state conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateCard((prev) => ({ ...prev, [name]: value }));
  };

  // Busca o card pelo ID
  const getPost = async () => {
    try {
      console.log("Fetching card with ID:", id);
      const response = await cardFetch.get(`/cards/${id}`);
      setUpdateCard(response.data); // já joga no form
    } catch (error) {
      console.error("Erro ao buscar card:", error);
    } finally {
      console.log("executou");
    }
  };

  // Envia o update para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await cardFetch.put(`/cards/${id}`, updateCard);
      console.log("Card atualizado com sucesso!");
      navigate("/editCard"); // redireciona para lista
    } catch (error) {
      console.error("Erro ao atualizar card:", error);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <div>
      <h2>Editar Card</h2>
      <form className="update-container" onSubmit={handleSubmit}>
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
  );
};

export default Edit;

import { useFetch } from "../hooks/useFetch";
import './Cards.css';

const Cards = () => {


  const url = "http://localhost:3000/cards";

  const { data: items, loading, error } = useFetch(url);

  if (loading) return <p className="loading">Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!items) return <p>Sem dados.</p>;

  return (
    <div className="gallery">
        
      {items.length > 0 ? (
        items.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.rotaImg} alt={item.name} className="animal-img" />
            <h2 className="animal-name">{item.name}</h2>
          </div>
        ))
      ) : (
        <p className="no-results">Nenhum animal encontrado.</p>
      )}
    </div>
  );
};

export default Cards;

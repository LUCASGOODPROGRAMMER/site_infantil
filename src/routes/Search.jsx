import { useFetch } from "../hooks/useFetch";
import {Link, useSearchParams } from "react-router-dom";
import './Search.css';

const Search = () => {
    const [searchParams] = useSearchParams();
  const name = searchParams.get("name"); // ou "nome"

  const url = name
    ? `http://localhost:3000/cards?name_like=${name}`
    : "http://localhost:3000/cards";

  const { data: items, loading, error } = useFetch(url);

    // Não renderize nada enquanto estiver carregando ou data for null
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!items) return <p>Sem dados.</p>; // proteção extra


    if (!items) return <p className="loading">Carregando...</p>;

    return (
        <section className="search-page">
            <h1 className="search-title">Resultados da Pesquisa</h1>
            <div className="gallery">
                {items && items.length > 0 ? (
                    items.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.rotaImg} alt={item.nome} className="animal-img" />
                            <h2 className="animal-name">{item.nome}</h2>
                        </div>
                    ))
                ) : (
                    <p className="no-results">Nenhum animal encontrado.</p>
                )}
            </div>

        </section>
    );
};

export default Search;

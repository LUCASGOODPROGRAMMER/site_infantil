// hooks
import { useFetch } from "../hooks/useFetch"
import { useSearchParams, Link } from "react-router-dom"

//estilos
import './Cards.css'

const Search = () => {
    const [searchParams] = useSearchParams();

    const url = "http://localhost:3000/cards?" + searchParams;

    const { data: cards } = useFetch(url);



    if (!cards) return <p>Carregando...</p>;

    return (
        <div className="gallery">

            {cards.length > 0 ? (
                cards.map((card) => (
                    <Link to={`/cards/${card.id}`} key={card.id}>
                        <div className="card" >
                            <img src={card.rotaImg} alt={card.name} className="animal-img" />
                            <h2 className="animal-name">{card.name}</h2>
                        </div>
                    </Link>
                ))
            ) : (
                <p className="no-results">Nenhum animal encontrado.</p>
            )}
        </div>
    )
}

export default Search
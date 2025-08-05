// hooks
import { useFetch } from "../hooks/useFetch"
import { useSearchParams } from "react-router-dom"

//estilos
import './Cards.css'

const Search = () => {
    const [searchParams] = useSearchParams();

    const url = "http://localhost:3000/cards?" + searchParams;

    const { data: items } = useFetch(url);



    if (!items) return <p>Carregando...</p>;

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
    )
}

export default Search
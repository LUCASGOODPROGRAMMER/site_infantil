// hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// assets
import binoculo from '../imgs/navbar/binoculo.svg';

// estilos
import './SearchForm.css';


const SearchForm = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?name=${encodeURIComponent(query)}`);

  };

  // jsx
  return (
    <div id="banner">
      <form onSubmit={handleSubmit} id="search_bar">
        <img src={binoculo} alt="search-icon" />
        <input
          type="text"
          placeholder="pesquisar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="buscar" style={{ display: "none" }} />
      </form>
    </div>

  );
};

export default SearchForm;

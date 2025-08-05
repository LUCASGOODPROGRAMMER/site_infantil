import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Imagens
import binoculo from '../imgs/navbar/binoculo.svg';

// Estilos
import './SearchForm.css';

const SearchForm = () => {
  const [query, setQuery] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query)
  };

  return (
    <form onSubmit={handleSubmit} id="search_bar">
      <img src={binoculo} alt="search-icon" />
      <input
        type="text"
        placeholder="pesquisar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="" style={{ display: "none" }} />
    </form>
  );
};

export default SearchForm;

// hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// assets
import binoculo from '../imgs/navbar/binoculo.svg';

// estilos
import './SearchForm.css';

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const [openSearch, setOpenSearch] = useState(false); // abertura/fechamento

  const searchToggle = () => {
    setOpenSearch((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
     return navigate("/")
    } 
    navigate(`/search?name=${encodeURIComponent(query)}`);
  };

  return (
    <div id="banner">
      <form
        onSubmit={handleSubmit}
        id="search_bar"
        className={openSearch ? "open" : ""}
      >
        <button type="button" onClick={searchToggle} id="search-btn">
          <img src={binoculo} alt="search-icon" id="search-icon" />
        </button>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="buscar" style={{ display: "none" }} />
      </form>
    </div>
  );
};

export default SearchForm;

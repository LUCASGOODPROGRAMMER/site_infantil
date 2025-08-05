import { useNavigate } from "react-router-dom";
import { useState } from "react";
import binoculo from '../imgs/navbar/binoculo.svg';
import './SearchForm.css';

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

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
        <input type="submit" value="" style={{ display: "none" }} />
      </form>
    </div>

  );
};

export default SearchForm;

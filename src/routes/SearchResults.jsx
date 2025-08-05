// routes/SearchResults.jsx
import { useLocation } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  return (
    <div>
      <h2>Resultados para: "{query}"</h2>
      {/* Aqui você pode buscar dados ou filtrar conteúdo */}
    </div>
  );
}

export default SearchResults;

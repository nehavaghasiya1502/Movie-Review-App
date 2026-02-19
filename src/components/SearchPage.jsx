import { useState } from "react";
import MovieCard from "./MovieCard";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const search = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3b8daba08b98ed147f933e1c35afc9c2&query=${query}`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  };

  return (
    <div>
      <input onChange={e => setQuery(e.target.value)} />
      <button onClick={search}>Search</button>

      {movies.map(m => <MovieCard key={m.id} movie={m} />)}
    </div>
  );
}

export default SearchPage;

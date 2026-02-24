import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pages.css";

function Genres() {
  const [shows, setShows] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Drama");

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then(res => setShows(res.data))
      .catch(err => console.log(err));
  }, []);

  const genres = ["Drama", "Comedy", "Action", "Thriller", "Horror", "Romance"];

  const filteredShows = shows.filter(show => show.genres.includes(selectedGenre));

  return (
    <div className="page-container">
      <h2>Shows by Genre</h2>
      <div className="genre-buttons">
        {genres.map(genre => (
          <button
            key={genre}
            className={genre === selectedGenre ? "active-genre" : ""}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="shows-grid">
        {filteredShows.map(show => (
          <div key={show.id} className="show-card">
            <img src={show.image?.medium} alt={show.name} />
            <h4>{show.name}</h4>
            <p>Rating: {show.rating.average || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genres;
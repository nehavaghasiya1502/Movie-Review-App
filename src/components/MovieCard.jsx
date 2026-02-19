import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="modern-card">

      <div className="card-img">
        <img
          src={movie.image?.medium}
          alt={movie.name}
        />
      </div>

      <div className="card-info">
        <h3>{movie.name}</h3>

        <div className="tags">
          <span className="alive">⭐ {movie.rating?.average || "N/A"}</span>
          <span className="type">{movie.type}</span>
        </div>
      </div>

    </div>
  );
}
export default MovieCard;
import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <Link to={`/movie/${movie.id}`} className="modern-card show-up">

      <div className="card-img">
        <img
          src={
            movie.image?.medium ||
            "https://via.placeholder.com/210x295?text=No+Image"
          }
          alt={movie.name}
        />
      </div>

      <div className="card-info">
        <h3>{movie.name}</h3>

        <div className="tags">
          <span className="alive">
            ⭐ {movie.rating?.average || "N/A"}
          </span>
          <span className="type">{movie.type}</span>
        </div>
      </div>

    </Link>
  );
}

export default MovieCard;
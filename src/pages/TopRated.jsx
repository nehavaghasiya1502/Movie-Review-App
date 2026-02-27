import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pages.css";
import { Link } from "react-router-dom";

function TopRated() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then(res => {
        const sorted = res.data
          .filter(show => show.rating.average)
          .sort((a, b) => b.rating.average - a.rating.average)
          .slice(0, 20);
        setShows(sorted);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="page-container">
      <h2>Top Rated Shows</h2>

      <div className="shows-grid show-up">
        {shows.map(show => (
          <Link
            to={`/movie/${show.id}`}   // ✅ IMPORTANT
            key={show.id}
            className="show-card-link"
          >
            <div className="show-card">
              <img src={show.image?.medium} alt={show.name} />
              <h4>{show.name}</h4>
              <p>Rating: {show.rating.average}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopRated;
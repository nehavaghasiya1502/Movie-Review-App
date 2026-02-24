import React, { useEffect, useState } from "react";
import "./Pages.css";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedList);
  }, []);

  return (
    <div className="page-container">
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty!</p>
      ) : (
        <div className="shows-grid">
          {watchlist.map(show => (
            <div key={show.id} className="show-card">
              <img src={show.image} alt={show.name} />
              <h4>{show.name}</h4>
              <p>Rating: {show.rating || "N/A"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
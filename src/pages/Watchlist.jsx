import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./Pages.css";
import { Link } from "react-router-dom";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedList);
  }, []);

  const removeItem = (id) => {
    const updated = watchlist.filter(item => item.id !== id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="watchlist-container">
      <h2 className="watchlist-title show-up">My Watchlist</h2>

      {watchlist.length === 0 ? (
        <p className="empty-msg">Your watchlist is empty!</p>
      ) : (
        <div className="watchlist-list show-up">
          {watchlist.map(show => (
            <Link
              key={show.id}
              to={`/movie/${show.id}`}
              className="watchlist-row"
            >

              {/* LEFT IMAGE */}
              <div className="watchlist-img">
                <img
                  src={
                    show.image?.medium ||
                    "https://via.placeholder.com/150x200?text=No+Image"
                  }
                  alt={show.name}
                />
              </div>

              {/* CENTER DETAILS */}
              <div className="watchlist-info">
                <h3>{show.name}</h3>
                <p>⭐ {show.rating?.average || "N/A"}</p>
                <p>{show.language}</p>
              </div>

              {/* RIGHT REMOVE ICON */}
              <div
                className="watchlist-remove"
                onClick={(e) => {
                  e.preventDefault();   // link open na ho
                  removeItem(show.id);
                }}
              >
                <FaTrash />
              </div>

            </Link>
          ))}
        </div>

      )}
    </div>
  );
}

export default Watchlist;
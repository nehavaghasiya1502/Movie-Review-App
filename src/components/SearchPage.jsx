import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./SearchPage.css";

function SearchPage() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [activeCategory, setActiveCategory] = useState("popular");

  // SEARCH
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(data => setResults(data.map(i => i.show)));

  }, [query]);

  // CATEGORIES
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => {
        setPopular(data.slice(0, 15));
        setTopRated(data.filter(s => s.rating?.average > 8).slice(0, 15));
        setComedy(data.filter(s => s.genres.includes("Comedy")).slice(0, 15));
      });
  }, []);

  const currentData =
    activeCategory === "popular" ? popular :
      activeCategory === "top" ? topRated :
        comedy;

  return (
    <div className="search-page">

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search shows..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {/* SEARCH RESULTS */}
      {query && (
        <>
          <h2>Search Results</h2>
          <div className="poster-row">
            {results.map(show => (
              <MovieCard key={show.id} movie={show} />
            ))}
          </div>
        </>
      )}

      {/* CATEGORY BUTTONS */}
      <div className="category-buttons">
        <button className="cat-btn popular" onClick={() => setActiveCategory("popular")}>
          <span>Popular</span>
        </button>

        <button className="cat-btn top" onClick={() => setActiveCategory("top")}>
          <span>Top Rated</span>
        </button>

        <button className="cat-btn comedy" onClick={() => setActiveCategory("comedy")}>
          <span>Comedy</span>
        </button>
      </div>

      {/* CATEGORY SHOW */}
      <h2>{activeCategory.toUpperCase()} SHOWS</h2>

      <div className="poster-row">
        {currentData.map(show => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>

    </div>
  );
}

export default SearchPage;
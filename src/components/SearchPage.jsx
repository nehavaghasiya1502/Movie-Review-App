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
  const [showType] = useState("All");
  const [animate, setAnimate] = useState(false);

  //  SEARCH
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(data => setResults(data.map(i => i.show)))
      .catch(err => console.log(err));
  }, [query]);

  // 🔹 CATEGORIES
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => {
        setPopular(data.slice(0, 15));
        setTopRated(data.filter(s => s.rating?.average > 8).slice(0, 15));
        setComedy(data.filter(s => s.genres.includes("Comedy")).slice(0, 15));
      });
  }, []);

  // 🔹 CURRENT CATEGORY DATA
  const currentData =
    activeCategory === "popular"
      ? popular
      : activeCategory === "top"
        ? topRated
        : comedy;

  // 🔹 TYPE FILTER
  const filteredData = currentData.filter(show =>
    showType === "All" || show.type === showType
  );

  // 🔹 ANIMATION TRIGGER
  useEffect(() => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  }, [activeCategory, query]);

  return (
    <div className="search-page">

      {/* SEARCH */}
      {/* <input
        type="text"
        placeholder="Search shows..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      /> */}
      <div className="search-box">
  <input
    type="text"
    placeholder="Search shows..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="search-input"
  />

  {query.length > 0 && (
    <button
      className="clear-btn"
      onClick={() => setQuery("")}
      type="button"
    >
      ✖
    </button>
  )}
</div>

      {/* CATEGORY BUTTONS */}
      <div className="category-buttons">
        <button
          className={activeCategory === "popular" ? "cat-btn active" : "cat-btn"}
          onClick={() => setActiveCategory("popular")}
        >
          Popular
        </button>

        <button
          className={activeCategory === "top" ? "cat-btn active" : "cat-btn"}
          onClick={() => setActiveCategory("top")}
        >
          Top Rated
        </button>

        <button
          className={activeCategory === "comedy" ? "cat-btn active" : "cat-btn"}
          onClick={() => setActiveCategory("comedy")}
        >
          Comedy
        </button>
      </div>

      {/* SEARCH RESULTS */}
      {query && (
        <>
          <h2 style={{ color: "white" }}>Search Results</h2>

          <div key={query} className={`cards-wrapper ${animate ? "show-up" : ""}`}>
            <div className="poster-row">
              {results.map(show => (
                <MovieCard key={show.id} movie={show} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* CATEGORY SHOWS */}
      {!query && (
        <>
          <h2 className="category-title">
            {activeCategory === "popular" && "Popular Shows"}
            {activeCategory === "top" && "Top Rated Shows"}
            {activeCategory === "comedy" && "Comedy Shows"}
          </h2>

          <div
            key={activeCategory}
            className={`cards-wrapper ${animate ? "show-up" : ""}`}
          >
            <div className="poster-row">
              {filteredData.map(show => (
                <MovieCard key={show.id} movie={show} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchPage;
import React, { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import MovieRow from "../components/MovieRow";
import "./Home.css";

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => setShows(data))
      .catch(err => console.log(err));
  }, []);

  if (!shows.length) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div>

      <HeroSlider shows={shows.slice(0, 5)} />
      <div className="home-dark-section">
        <MovieRow title=" Popular Shows" movies={shows.slice(10, 30)} />
        <MovieRow title=" Top Rated Shows" movies={shows.slice(30, 50)} />
        <MovieRow title=" Comedy Shows" movies={shows.slice(50, 70)} />
      </div>
    </div>
  );
}

export default Home;

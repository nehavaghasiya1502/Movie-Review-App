import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieCard from "./MovieCard";
import "@splidejs/react-splide/css";
import "./MovieRow.css";

function MovieRow({ title, movies = [] }) {
  return (
    <div className="movie-row">
      <h2>{title}</h2>

      <Splide
        options={{
          perPage: 5,
          gap: "20px",
          interval: 2000,
          pauseOnHover: true,
          arrows: true,
          autoplay: true,
          pagination: false,
          breakpoints: {
            1024: { perPage: 4 },
            768: { perPage: 2 },
            480: { perPage: 1 }
          }
        }}
      >

        {movies.map((m) => (
          <SplideSlide key={m.id}>
            <MovieCard movie={m} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default MovieRow;

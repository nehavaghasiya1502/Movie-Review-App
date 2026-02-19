import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./HeroSlider.css";
function HeroSlider({ shows = [] }) {
  return (
    <div className="hero-section">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 3000,
          arrows: false,
          pagination: true,
          rewind: true,
          drag: true,
          pauseOnHover: false,
        }}
      >
        {shows.map(show => (
          <SplideSlide key={show.id}>
            <div className="hero">


              <img
                src={show.image?.original}
                alt={show.name}
              />

              <div className="hero-content">
                <h1>{show.name}</h1>

                <p className="genre">
                  {show.genres.join(", ")}
                </p>

                <p
                  dangerouslySetInnerHTML={{
                    __html: show.summary?.slice(0, 120)
                  }}
                />

                <button className="hero-btn">
                  View Details →
                </button>
              </div>

            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default HeroSlider;

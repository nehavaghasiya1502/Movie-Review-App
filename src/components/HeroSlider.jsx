import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./HeroSlider.css";
import { useNavigate } from "react-router-dom"; 

const fallbackImages = [
  "https://images.pexels.com/photos/2747014/pexels-photo-2747014.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/2738577/pexels-photo-2738577.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/799158/pexels-photo-799158.jpeg?auto=compress&cs=tinysrgb&w=1920",
];

function HeroSlider({ shows = [] }) {

  const navigate = useNavigate();  

  return (
    <div className="hero-section">
      <Splide
        options={{
          type: "slide",
          autoplay: true,
          interval: 4000,
          arrows: false,
          pagination: true,
          rewind: true,
          drag: true,
          pauseOnHover: false,
        }}
      >
        {shows.map((show, index) => (
          <SplideSlide key={show.id || index}>
            <div className="hero show-up">

              <img
                src={show.image?.original || fallbackImages[index % fallbackImages.length]}
                alt={show.name}
                className="hero-img"
              />

              <div className="hero-content">
                <h1 className="hero-title">{show.name}</h1>

                <p className="genre">{show.genres?.join(", ")}</p>

                <p
                  className="summary"
                  dangerouslySetInnerHTML={{
                    __html: show.summary?.slice(0, 200) + "..."
                  }}
                />

                {/*  correct button */}
                <button
                  className="hero-btn"
                  onClick={() => navigate(`/movie/${show.id}`)}
                >
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
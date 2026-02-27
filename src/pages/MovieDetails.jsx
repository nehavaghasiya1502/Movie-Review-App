import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [inWatchlist, setInWatchlist] = useState(false);

  const [showReview, setShowReview] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  const checkLogin = () => {
    const user = localStorage.getItem("user");

    if (!user || user === "guest") {
      setShowPopup(true);
      return false;
    }
    return true;
  };

  // FETCH MOVIE
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  // LOAD REVIEWS
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews.filter(r => r.movieId === id));
  }, [id]);

  // CHECK WATCHLIST
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("watchlist")) || [];
    const exists = list.find(item => item.id === Number(id));
    setInWatchlist(!!exists);
  }, [id]);

  if (!movie) return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;

  // ADD / REMOVE WATCHLIST
  const toggleWatchlist = () => {
    let list = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (inWatchlist) {
      list = list.filter(item => item.id !== movie.id);
      alert("Removed from Watchlist ❌");
    } else {
      list.push(movie);
      alert("Added to Watchlist ❤️");
    }

    localStorage.setItem("watchlist", JSON.stringify(list));
    setInWatchlist(!inWatchlist);
  };

  // REVIEW SUBMIT
  const handleSubmitReview = () => {
    if (!reviewText || rating === 0) {
      alert("Please add review & rating");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("reviews")) || [];
    const newReview = {
      movieId: id,
      text: reviewText,
      rating,
      date: new Date().toISOString()
    };

    const updated = [...existing, newReview];
    localStorage.setItem("reviews", JSON.stringify(updated));

    setReviews(updated.filter(r => r.movieId === id));
    setShowReview(false);
    setReviewText("");
    setRating(0);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating
          ? <FaStar key={i} onClick={() => setRating(i)} color="red" />
          : <FaRegStar key={i} onClick={() => setRating(i)} color="red" />
      );
    }
    return stars;
  };

  const handleTrailerClick = () => {
    const trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.name + " trailer")}`;
    window.open(trailerUrl, "_blank");
  };

  return (
    <div className="details-page">

      <div className="details-card show-up">

        <button className="close-btn" onClick={() => navigate(-1)}>✖</button>

        <div className="details-img">
          <img src={movie.image?.original || movie.image?.medium} alt={movie.name} />
        </div>

        <div className="details-info">
          <h1>{movie.name}</h1>

          <div className="details-tags">
            ⭐ {movie.rating?.average || "N/A"} | {movie.language}
          </div>

          <div dangerouslySetInnerHTML={{ __html: movie.summary }} />

          {/* REVIEW BUTTON */}
          {/* Buttons Row */}
<div className="details-btns">
  <button className="review-btn" onClick={() => checkLogin() && setShowReview(true)}>
    ⭐ Write Review
  </button>

  <button className="watch-btn" onClick={() => checkLogin() && toggleWatchlist()}>
    {inWatchlist ? "❌ Remove from Watchlist" : "❤️ Add to Watchlist"}
  </button>
</div>

{/* Trailer Button */}
<button className="trailer-btn" onClick={handleTrailerClick}>
  ▶ Watch Trailer
</button>

        </div> {/* details-info */}
      </div> {/* details-card */}


      {/* REVIEWS SECTION */}
      <div className="reviews-section">
        <h3>Reviews:</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet</p>
        ) : (
          reviews.map((r, i) => (
            <div key={i} className="review-item">
              ⭐ {r.rating}
              <p>{r.text}</p>
            </div>
          ))
        )}
      </div>

      {/* REVIEW MODAL */}
      {showReview && (
        <div className="review-modal">
          <div className="review-content">
            <button onClick={() => setShowReview(false)}>✖</button>
            <h2>Write Review</h2>
            <div>{renderStars()}</div>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <button onClick={handleSubmitReview}>Submit</button>
          </div>
        </div>
      )}

      {/* LOGIN POPUP */}
      {showPopup && (
        <div className="login-popup">
          <div className="login-popup-box">
            <h3>Please Login or Register</h3>
            <p>You must login to give review or add watchlist.</p>

            <button onClick={() => navigate("/login")}>
              Login / Register
            </button>

            <button onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default MovieDetails;
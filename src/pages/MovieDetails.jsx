import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Review Modal State
  const [showReview, setShowReview] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const movieReviews = storedReviews.filter(r => r.movieId === id);
    setReviews(movieReviews);
  }, [id]);

  if (!movie) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;
  }
  const handleSubmitReview = () => {
    if (!reviewText || rating === 0) {
      alert("Please add a review and rating!");
      return;
    }

    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const newReview = {
      movieId: id,
      text: reviewText,
      rating: rating,
      date: new Date().toISOString()
    };

    const updatedReviews = [...existingReviews, newReview];

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    setReviews(updatedReviews.filter(r => r.movieId === id));
    setShowReview(false);
    setReviewText("");
    setRating(0);

    alert("Review submitted successfully!");
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FaStar key={i} color="#ff0000" onClick={() => setRating(i)} />
        );
      } else if (i - 0.5 === rating) {
        stars.push(
          <FaStarHalfAlt key={i} color="#ff0000" onClick={() => setRating(i)} />
        );
      } else {
        stars.push(
          <FaRegStar key={i} color="#ff0000" onClick={() => setRating(i)} />
        );
      }
    }
    return stars;
  };

  return (
    <div className="details-page">
      <div className="details-card">
        <button className="close-btn" onClick={() => navigate(-1)}>✖</button>

        <div className="details-img">
          <img src={movie.image?.original || movie.image?.medium} alt={movie.name} />
        </div>

        <div className="details-info">
          <h1>{movie.name}</h1>
          <div className="details-tags">
            <span className="rating">⭐ {movie.rating?.average || "N/A"}</span>
            <span className="type">{movie.type}</span>
            <span className="lang">{movie.language}</span>
          </div>

          <div dangerouslySetInnerHTML={{ __html: movie.summary }} />

          <button className="review-btn" onClick={() => setShowReview(true)}>
            ⭐ Write Review
          </button>
        </div>
      </div>

      <div className="reviews-section">
        <h3>Reviews:</h3>
        {reviews.length === 0 ? (
          <p style={{ color: "#aaa" }}>No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((r, index) => (
            <div key={index} className="review-item">
              <div className="review-rating">⭐ {r.rating}</div>
              <p>{r.text}</p>
              <small>{new Date(r.date).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>

      {/* Review Modal - outside details-card */}
      {showReview && (
        <div className="review-modal">
          <div className="review-content">
            <button className="close-btn" onClick={() => setShowReview(false)}>✖</button>
            <h2>Write Your Review</h2>

            <div className="star-rating">{renderStars()}</div>

            <textarea
              placeholder="Type your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            <button className="review-btn" onClick={handleSubmitReview}>Submit Review</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
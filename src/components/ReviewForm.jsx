import { useState } from "react";

function ReviewForm({ addReview }) {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review) return;
    addReview(review);
    setReview("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;

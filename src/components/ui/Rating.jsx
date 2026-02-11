import React from "react";

function Rating({ rating }) {
  console.log("RATING RECEIVED:", rating, typeof rating);
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <span key={index} className="book__rating--star">
          ★
        </span>
      ))}
      {!Number.isInteger(rating) && (
        <span className="book__rating--half-star">★</span>
      )}
    </div>
  );
}

export default Rating;

// Code MovieReviews Here
import React from 'react';

const Review = ({ display_title, headline, summary_short, publication_date }) => {
  return (
    <div className='review' key={headline}>
      <h3>Title: {display_title}</h3>
      <h5>Headline: {headline}</h5>
      <h5>Summary: {summary_short}</h5>
      <h5>Publication Date: {publication_date}</h5>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => {
        return (
          Review(review)
        );
      })}
    </div>
  );
}


export default MovieReviews;
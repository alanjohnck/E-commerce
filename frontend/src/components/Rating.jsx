import React from 'react'
import "../components/rating.css"

const Rating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const remainder = rating - filledStars;
  
    const renderStars = () => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < filledStars) {
          stars.push(<span key={i} className="star filled"></span>);
        } else if (i === filledStars && remainder !== 0) {
          stars.push(
            <span key={i} className="star" style={{width: `${remainder * 100}%`}}></span>
          );
        } else {
          stars.push(<span key={i} className="star"></span>);
        }
      }
      return stars;
    };
  
    return <div className="star-rating">{renderStars()}</div>;
  };
  

export default Rating;
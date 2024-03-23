// Remove any existing definition of HomeMainSection if present

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import reviews from '../data/reviews'; // Import default export

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getRandomReviews = () => {
      const randomIndexes = [];
      while (randomIndexes.length < 2) {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
      return randomIndexes.map(index => reviews[index]);
    };

    setRandomReviews(getRandomReviews());
  }, []);

  const handleShopNowClick = () => {
    navigate('/products');
  };

  return (
    <section className="home-main-section">
      <div className="about-us">
        <h2>About Us</h2>
        <p>Company's mission and vision description goes here.</p>
        <button onClick={handleShopNowClick}>Shop Now</button>
      </div>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <div className="stars">{Array(review.stars).fill().map((_, i) => <span key={i}>★</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMainSection;

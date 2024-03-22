// HomePage.js

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from './Footer';
import { getTwoRandomReviews } from '../utils/reviews'; // Assuming you have a function to fetch random reviews

function Header() {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function HomeMainSection() {
  const [reviews, setReviews] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch two random reviews when component mounts
    const randomReviews = getTwoRandomReviews();
    setReviews(randomReviews);
  }, []);

  const handleShopNowClick = () => {
    history.push('/products');
  };

  return (
    <div>
      <section>
        <h2>About Us</h2>
        <p>Company's vision and mission</p>
        <button onClick={handleShopNowClick}>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <p>Rating: {Array(review.stars).fill().map((_, i) => <span key={i}>★</span>)}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Header />
      <HomeMainSection />
      <Footer />
    </div>
  );
}

export default HomePage;

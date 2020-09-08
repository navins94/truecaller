import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div>
            <Link to="/">Truecaller</Link>
          </div>
        </div>
      </div>
      <div
        className="scrollTop"
        onClick={() => scrollTop()}
        aria-hidden="true"
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
          <path
            d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;

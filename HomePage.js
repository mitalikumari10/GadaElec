import React from 'react';
import "./HomePage.css";

function HomePage({jethalal }) {
  return (
    <div className='homepage'>
    <div className='elements'>
      <div className="title">
          <h1>Experience Electronics Redefined: Unleash Innovation</h1>
          </div>
          <div className='subtitle'>
            <p>Discover the Future of Electronics: Unleash Innovation, Immerse in
            Unparalleled Quality. Experience our cutting-edge technology and
            elevate your everyday with Gada Electronics. Explore the
            extraordinary today.</p>
          </div>
          <button className="btn">
            Shop now
          </button>
        </div>
         <div className='jethalal'><img src={jethalal} alt='jethalal'/></div>
         </div>
  );
}

export default HomePage;

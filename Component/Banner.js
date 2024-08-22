import React from 'react';
import bannerImage from './assets/i.jpg';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, vel eos nulla accusamus doloremque tempore ipsam iusto a exercitationem cupiditate?</p>
        <div className="banner-buttons">
          <button className="btn1">Purchase UI Kit</button>
          <button className="btn2">Learn More</button>
        </div>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="Banner" />
      </div>
    </section>
  );
}

export default Banner;

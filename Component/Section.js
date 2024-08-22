import React from 'react';
import section1 from './assets/bracelate1.jpeg';
import section2 from './assets/bracelate2.jpeg';
import section3 from './assets/Banner.png';

function Section() {
  return (
    <>
      <section className="section1">
        <div className="section-image">
          <img src={section1} alt="Section 1" />
        </div>
        <div className="section-text">
          <h2>Heading</h2>
          <p>Your paragraph text goes here. Additional information about the product or service.</p>
        </div>
      </section>

      <section className="section2">
        <div className="section-image">
          <img src={section2} alt="Section 2" />
        </div>
        <div className="section-text">
          <h2>Heading</h2>
          <p>Your paragraph text goes here. Additional information about the product or service.</p>
        </div>
      </section>

      <section className="section3">
        <div className="section-image">
          <img src={section3} alt="Section 3" />
        </div>
        <div className="section-text">
          <h2>Heading</h2>
          <p>Your paragraph text goes here. More details or description about your offer.</p>
          <button className="btn">Purchase Now</button>
        </div>
      </section>
    </>
  );
}

export default Section;

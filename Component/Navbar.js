import React from 'react';

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="logo">Landing Page</div>
        <button className="btn">Buy Now</button>
      </div>
    </header>
  );
}

export default Navbar;

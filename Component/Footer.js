import React from 'react';
import fbIcon from './assets/fb.png';
import twitterIcon from './assets/download.png';
import instaIcon from './assets/insta.jpeg';
import youtubeIcon from './assets/youtube1.png';
import linkedinIcon from './assets/lkdn.png';
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <p>&copy; 2024 Your Company</p>
          <div className="footer-logo">Landing Page</div>
          <button className="btn">Buy Now</button>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="nav-links">
            <a href="#home" className="home">Home</a>
            <a href="#features" className="features">Features</a>
            <a href="#contact" className="contact">Contact</a>
          </div>
          <div className="social-links">
            <a href="#"><img src={fbIcon} alt="Facebook" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="#"><img src={instaIcon} alt="Instagram" /></a>
            <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
            <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

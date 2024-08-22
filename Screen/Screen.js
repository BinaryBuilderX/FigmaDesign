import React from 'react';
import Navbar from '../Component/Navbar';
import Banner from '../Component/Banner';
import Section from '../Component/Section';
import Pricing from '../Component/Pricing';
import Footer from '../Component/Footer';

function Screen() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <Pricing />
     <Footer/>
    </div>
  );
}

export default Screen;

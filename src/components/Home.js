/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import {
  AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu,
} from '../container';
import Navbar from './Navbar/Navbar';
import './Home.css';

const Home = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default Home;

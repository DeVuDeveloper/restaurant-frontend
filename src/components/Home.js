/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Signbar from './Signbar/Signbar';

import {
  AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu,
} from '../container';
import Navbar from './Navbar/Navbar';
import './Home.css';

const Home = () => (
  <div>
    <Navbar />
    <Signbar />
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

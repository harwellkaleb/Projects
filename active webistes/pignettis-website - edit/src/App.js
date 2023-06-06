import React from 'react';

import { AboutUs, WineMenu, Events, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
     <Events /> 
    <WineMenu /> 
    {/* <Intro /> */}
    <Laurels /> 
    <Gallery />
    <FindUs />
    <Footer /> 
  </div>
);

export default App;

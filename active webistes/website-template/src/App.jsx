import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { services } from "./assets";

const App = () => (
  <div>
    <div
      className="bg-no-repeat bg-left-top "
      style={{ backgroundImage: `url(${services})` }}
    >
      <Navbar />
      <Home />
      <About />
    </div>
    
  </div>
);

export default App;

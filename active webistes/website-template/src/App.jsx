import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { gallery01, paint1 } from "./assets";

const App = () => (
  <div>
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${paint1})` }}
    >
      <Navbar />
      <Home />
    </div>
    <div className="bg-primary">
      <About />
    </div>
  </div>
);

export default App;

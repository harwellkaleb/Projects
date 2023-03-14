import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import { services } from "./assets";
import Services from "./components/Services";

const App = () => (
  <div>
    <div
      className="bg-no-repeat bg-left-top "
      style={{ backgroundImage: `url(${services})` }}
    >
      <Navbar />
      <Home />
      <Services/>
    </div>
    
  </div>
);

export default App;

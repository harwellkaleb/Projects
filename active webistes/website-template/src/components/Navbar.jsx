import React from "react";
import { brush } from "../assets";
const Navbar = () => {
  return (
    <nav className="w-full items-center flex  py-6  ">
      {/* left side */}
        <img src={brush} alt="brush" className="h-[30px] ml-3 " />
        <h1 className="ml-3 flex-1 flex font-medium uppercase"> painters are us</h1>
      
      {/* navbar links */}
      <div className="max-w-[1640] flex flex-1  items-center   p-6">
        <ul className=" list-none mx-8 sm:flex justify-end items-center ">
          <li>
            <a href="">Home</a>
          </li>
        </ul>
        <ul className="list-none mx-8 sm:flex  justify-end items-center ">
          <li>
            <a href="">About</a>
          </li>
        </ul>
        <ul className="list-none mx-8 sm:flex  justify-end items-center ">
          <li>
            <a href="">Services</a>
          </li>
        </ul>
        <ul className="list-none mx-8 sm:flex  justify-end items-center ">
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <ul className="list-none mx-8 sm:flex  justify-end items-center ">
          <li>
            <a href="">Gallery</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

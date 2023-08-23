'use client';

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import dynamic from 'next/dynamic';
// import styles from '../styles';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
  // useEffect(() => {
  //   window.OT = window.OT || {};
  //   window.OT.Widget = window.OT.Widget || {};
  //   window.OT.Widget.Loader = {
  //     load: function (target, options) {
  //       window.OpenTable = window.OpenTable || {};
  //       window.OpenTable.Widget = window.OpenTable.Widget || {};
  //       window.OpenTable.Widget.Reservation =
  //         window.OpenTable.Widget.Reservation || {};
  //       window.OpenTable.Widget.Reservation.containerId = target;
  //       window.OpenTable.Widget.Reservation.settings = options;
  //       var script = document.createElement("script");
  //       script.type = "text/javascript";
  //       script.src =
  //         "https://secure.opentable.com/widget/reservation/loader.js";
  //       document.body.appendChild(script);
  //     },
  //   };
  //   window.OT.Widget.Loader.load("ot-widget-div", {
  //     type: "rid",
  //     id: "168931",
  //     image: false,
  //     backgroundColor: "#f2f2f2",
  //   });
  // }, []);

    <nav className="w-full flex border-b-2 border-black justify-between items-center bg-[#804040] p-4">
      <div className="flex justify-start items-center">
        <img src="/Gericht.png" alt="app_logo" className="w-[150px]" />
      </div>
      {/* <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#Private-Events'>Private Events</a></li>
        <li className='p__opensans'><a href='#events'>Upcoming Events</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
        <li className='p__opensans'><a href='https://www.toasttab.com/pignettis-italian-temple/giftcards' target='_blank'  rel="noreferrer" >Gift Cards</a></li>
        <li className='p__opensans'><a href='https://www.toasttab.com/pignettis-italian-temple/findcard' target='_blank' without rel="noreferrer" >Gift Card Balance</a></li>
      </ul> */}

      <div className="flex">
        <div className="flex justify-center items-center ">
          <a
            href="https://www.toasttab.com/pignettis-italian-temple"
            target="_blank"
            rel="noreferrer"
            className="p__opensans my-0 mx-4 no-underline transition-all duration-500 ease-in-out text-black hover:border-b hover:border-[#c0c0c0]"
          >
            Order Online
          </a>
          <div className=" w-px h-[30px] bg-black " />
          <a
            href="https://www.opentable.com/pignettis-italian-restaurant-reservations-temple?restref=168931&lang=en-US&ot_source=Restaurant%20website"
            target="_blank"
            rel="noreferrer"
            className="p__opensans my-0 mx-4 no-underline transition-all duration-500 ease-in-out text-black hover:border-b hover:border-[#c0c0c0]
            "
          >
            Book a table
          </a>
        </div>

        <GiHamburgerMenu
          style={{ cursor: 'pointer' }}
          color="black"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div
            className="fixed top-0 left-0 w-full h-screen bg-[#804040] transition-all duration-500 ease-in-out flex-col z-50
        flex justify-center items-center slide-bottom"
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="text-3xl text-[#c0c0c0] cursor-pointer absolute top-5 right-5
            "
              onClick={() => setToggleMenu(false)}
            />
            <ul className="list-none">
              <li className="p__opensans  hover:text-[#c0c0c0] ">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0] ">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0] ">
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0]">
                <a href="#events" onClick={() => setToggleMenu(false)}>
                  Upcoming Events
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0]">
                <a href="#Private-Events" onClick={() => setToggleMenu(false)}>
                  Private Events
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0]">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0]">
                <a href="#gallery" onClick={() => setToggleMenu(false)}>
                  Gallery
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0]">
                <a
                  href="https://www.toasttab.com/pignettis-italian-temple"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setToggleMenu(false)}
                >
                  Order Online
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0]">
                <a
                  href="https://www.opentable.com/pignettis-italian-restaurant-reservations-temple?restref=168931&lang=en-US&ot_source=Restaurant%20website"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setToggleMenu(false)}
                >
                  Book a table
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0]">
                <a
                  href="https://www.toasttab.com/pignettis-italian-temple/giftcards"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setToggleMenu(false)}
                >
                  Gift Cards
                </a>
              </li>
              <li className="p__opensans  hover:text-[#c0c0c0]">
                <a
                  href="https://www.toasttab.com/pignettis-italian-temple/findcard"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setToggleMenu(false)}
                >
                  Gift Card Balance
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

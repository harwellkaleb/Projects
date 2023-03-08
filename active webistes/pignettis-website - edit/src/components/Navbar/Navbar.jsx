import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Helmet } from 'react-helmet';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.OT = window.OT || {};
    window.OT.Widget = window.OT.Widget || {};
    window.OT.Widget.Loader = {
      load: function(target, options) {
        window.OpenTable = window.OpenTable || {};
        window.OpenTable.Widget = window.OpenTable.Widget || {};
        window.OpenTable.Widget.Reservation = window.OpenTable.Widget.Reservation || {};
        window.OpenTable.Widget.Reservation.containerId = target;
        window.OpenTable.Widget.Reservation.settings = options;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://secure.opentable.com/widget/reservation/loader.js';
        document.body.appendChild(script);
      }
    };
    window.OT.Widget.Loader.load('ot-widget-div', {
      type: 'rid',
      id: '168931',
      image: false,
      backgroundColor: '#f2f2f2'
    });
  }, []);

  return (
    <nav className='app__navbar'>
      <Helmet>
        <script type='text/javascript' src='https://www.opentable.com/pignettis-italian-restaurant-reservations-temple?restref=168931&lang=en-US&ot_source=Restaurant%20website'></script>
      </Helmet>

      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
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

      <div className="app__navbar-login">
        <a href='https://www.toasttab.com/pignettis-italian-temple' target='_blank' rel="noreferrer" className='p__opensans'>Order Online</a>
        <div />
        <a href='https://www.opentable.com/pignettis-italian-restaurant-reservations-temple?restref=168931&lang=en-US&ot_source=Restaurant%20website' target='_blank' rel="noreferrer"   class='p__opensans'>Book a table</a>
        </div>
      

      <div className='app__navbar-smallscreen '>
        <GiHamburgerMenu color='black' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='p__opensans'><a href='#about' onClick={() => setToggleMenu(false)} >About</a></li>
              <li className='p__opensans'><a href='#menu' onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li className='p__opensans'><a href='#events' onClick={() => setToggleMenu(false)}>Upcoming Events</a></li>
              <li className='p__opensans'><a href='#Private-Events' onClick={() => setToggleMenu(false)}>Private Events</a></li>
              <li className='p__opensans'><a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li className='p__opensans'><a href='https://www.toasttab.com/pignettis-italian-temple' target='_blank' without rel="noreferrer"  onClick={() => setToggleMenu(false)} >Order Online</a></li>
              <li className='p__opensans'><a href='https://www.opentable.com/pignettis-italian-restaurant-reservations-temple?restref=168931&lang=en-US&ot_source=Restaurant%20website' target='_blank' rel="noreferrer" onClick={() => setToggleMenu(false)}>Book table</a></li>
              <li className='p__opensans'><a href='https://www.toasttab.com/pignettis-italian-temple/giftcards' target='_blank' rel="noreferrer"  onClick={() => setToggleMenu(false)} >Gift Cards</a></li>
              <li className='p__opensans'><a href='https://www.toasttab.com/pignettis-italian-temple/findcard' target='_blank' rel="noreferrer" onClick={() => setToggleMenu(false)} >Gift Card Balance</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}
  ;

export default Navbar;

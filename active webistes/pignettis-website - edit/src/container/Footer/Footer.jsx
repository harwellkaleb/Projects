import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext' >Contact Us</h1>
        <p className='p__opensans' ><a href="http://maps.apple.com/?q=14s+2nd+St.,+Temple,+TX+76502" rel='noreferrer' target='_blank'  >14 S 2nd St Temple, TX 76501</a></p>
        <p className='p__opensans' ><a href='tel:254-778-1269'>254-778-1269</a></p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans' >"In Vino Veritas.”</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href='https://www.facebook.com/Pignettis/' rel='noreferrer' target='_blank'><FiFacebook /></a>
          {/* <FiTwitter /> */}
          <a href='https://www.instagram.com/pignettistemple/' rel='noreferrer' target='_blank' ><FiInstagram /></a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className='app__footer-headtext' >Working Hours</h1>
        <p className='p__opensans' >Monday-thursday:</p>
        <p className='p__opensans' >11:00am-9:00pm</p>
        <p className='p__opensans' >friday-saturday:</p>
        <p className='p__opensans' >11:00am-10:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className='p__opensans' >2023 Pignetti's Temple. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

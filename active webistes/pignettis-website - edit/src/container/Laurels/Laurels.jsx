import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com"
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const ContactUs = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // add state variable

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3h51822', 'template_kidzl5v', form.current, 'JergqtwcHkG9AMAx_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
      setIsSubmitted(true); // set state variable to true
  };

  return (
<div className='app__bg app__wrapper section__padding' id='Private-Events'>
  <div className="app__wrapper_info">
    <h1 className='headtext__cormorant'>request a private event</h1>
    <p className='p__cormorant'>To request booking for a private event,</p>
    <p className='p__cormorant'>Please fill out the form below and we will reply to your email as soon as possible! Thank you!</p>
    <SubHeading title='' />
    <form className='form__container' style={{marginTop:'1rem'}} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone Number</label>
      <input type="text" name="user_phone" />
      <label># of Guests</label>
      <input type="number" name="user_number" />
      <label>Time</label>
      <input type="time" name="user_time" />
      <label>Date</label>
      <input type="date" name="user_date" />
      <label>Message</label>
      <textarea name="message" />
      <div className="message-box">
      {isSubmitted && <p className="success-message">Thank you, your form has been submitted.</p>}
    </div>
      <input className='custom__button' type="submit" value="Send" />
    </form>
    
  </div>

  <div className="app__wrapper_img">
    <img src={images.laurels} alt='laurels' />
  </div>
</div>

  );
};

export default ContactUs;



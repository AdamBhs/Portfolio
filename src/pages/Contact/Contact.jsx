import React, { useState, useRef } from 'react';
import "./ContactStyle.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [selected, setSelected] = useState("");
  const form = useRef();

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_69yz8a5', 'template_jpz082n', form.current, {
        publicKey: 'YpWp49PynFQ7ku89A',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-container'>
      <div className='hire'>
        <h1>Let's work together</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nesciunt sit illo esse commodi.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className='inputs'>
            <input type="text" name="user_name" placeholder='Name*' required/>
            <input type="text" name="company_name" placeholder='Company' />
            <input type="text" name="user_email" placeholder='Email address*' required/>
            <input type="text" name="user_phone" placeholder='Phone number' />
          </div>

          <select 
            name="service" 
            value={selected}
            onChange={handleSelectChange}
            className={selected === "" ? 'default-option' : 'selected-option'}
          >
            <option value="" hidden>Select a service</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
          </select>

          <textarea name="message" placeholder='Type your message here.' required></textarea>
          <input className="hire_btn" type="submit" value="Send"/>
        </form>
      </div>

      <div className='contact'>
        <div className='contact_data'>
          <div className='icon'><FaPhoneAlt /></div>
          <div className='data'>
            <h4>Phone</h4>
            <h3>(+216) 54 014 243</h3>
          </div>
        </div>

        <div className='contact_data'>
          <div className='icon'><FaEnvelope /></div>
          <div className='data'>
            <h4>Email </h4>
            <h3>adem.bnHassine@gmail.com</h3>
          </div>
        </div>

        <div className='contact_data'>
          <div className='icon'><FaMapMarkerAlt /></div>
          <div className='data'>
            <h4>Address</h4>
            <h3>Sousse, Msaken</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

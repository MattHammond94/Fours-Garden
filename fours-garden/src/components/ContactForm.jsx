import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const contactForm = useRef();

  const contactFormSubmission = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, contactForm.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact-form">
      <form ref={contactForm} onSubmit={contactFormSubmission}>
        <label>Name:</label>
        <input type="text" name="user_name" placeholder="Full Name"/>
        <label>Email Address:</label>
        <input type="email" name="user_email_address" placeholder="Email Address"/>
        <label>Query:</label>
        <textarea name="query" placeholder="Query" />
        <button className="contact-submit-btn" type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactForm
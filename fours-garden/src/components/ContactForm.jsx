import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const initialState = { name: '', email: '', query: '' }
  const [formValues, setFormValues] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState({});
  const contactForm = useRef();

  const handleChange = (e) => {
    const { name, value  } = e.target
    setFormValues({ ...formValues, [name]: value });
  }

  const validation = (values) => {
    const errors = {}
    const acceptedEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const acceptedName = /^[A-Za-z]+ [A-Za-z]+$/

    if (values.name.length <= 0) {
      errors.name = "Please complete this field to continue."
    } 
    
    if (!acceptedName.test(values.name)) {
      errors.name = "Name must appear in first name, last name format only."
    } 
    
    if (values.name.length > 20) {
      errors.name = "Name must be less than 20 characters."
    }

    if (values.email.length <= 0) {
      errors.email = "Please complete this field to continue."
    }

    if (!acceptedEmail.test(values.email)) {
      errors.email = "Please input a valid email address."
    }

    if (values.query.length <= 0) {
      errors.query = "Please complete this field to continue."
    }

    if (values.query.length > 1000) {
      errors.query = "Query cannot exceed 1000 characters."
    }

    return errors;
  }

  const contactFormSubmission = async (e) => {
    e.preventDefault();

    const errors = validation(formValues);

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {

      setFormValues(initialState);

      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID, 
          import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
          contactForm.current, 
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        );
      
        toast('Your query was succesfully sent!', {
          className: 'contact-toast',
          progressClassName: 'contact-toast-progress'
        });

      } catch(error) {
        toast.error('Your query was unsuccesful - please try again')
        console.error(error)
      }
    }
  }

  return (
    <div className="contact-form">
      <form ref={contactForm} onSubmit={contactFormSubmission}>
        <label>Name:</label>
        <input type="text" name="name" value={ formValues.name } onChange={ handleChange }/>
        <p>{ errorMessages.name }</p>
        <label>Email Address:</label>
        <input type="text" name="email" value={ formValues.email } onChange={ handleChange }/>
        <p>{ errorMessages.email }</p>
        <label>Query:</label>
        <textarea name="query" value={ formValues.query } onChange={ handleChange } />
        <p>{ errorMessages.query }</p>
        <button className="contact-submit-btn" type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactForm
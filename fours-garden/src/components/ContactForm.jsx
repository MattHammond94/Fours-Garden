import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const contactForm = useRef();

  const nameValidator = () => {
    
    name.trim()

    if (name.length <= 0) {
      setErrorMessage('This field cannot be left empty.')
      return false;
    }

    if (!/^[A-Za-z]+ [A-Za-z]+$/.test(name)) {
      setErrorMessage('Name should appear as first name and last name only')
      return false;
    }

    if (name.length > 20) {
      setErrorMessage('Name cannot be longer than 20 characters.')
      return false;
    }

    return true;
  }

  const contactFormSubmission = (e) => {
    e.preventDefault();


    if (nameValidator()) {
      emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, 
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
        contactForm.current, 
        import.meta.env.VITE_EMAIL_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setName('');
            setEmail('');
            setQuery('');
            toast('Your query was succesfully sent!', {
              className: 'contact-toast',
              progressClassName: 'contact-toast-progress'
            });
        }, (error) => {
            toast.error('Query unsuccessful')
            console.log(error.text);
        });
    }

  }

  return (
    <div className="contact-form">
      <form ref={contactForm} onSubmit={contactFormSubmission}>
        <label>Name:</label>
        <input type="text" name="user_name" placeholder="Full Name" value={ name } onChange={ (e) => setName(e.target.value) }/>
        { errorMessage && <p>{ errorMessage }</p> }
        <label>Email Address:</label>
        <input type="email" name="user_email_address" placeholder="Email Address" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
        <label>Query:</label>
        <textarea name="query" placeholder="Query" value={ query } onChange={ (e) => setQuery(e.target.value) } />
        <button className="contact-submit-btn" type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactForm
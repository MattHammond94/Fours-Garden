import ContactForm from "../components/ContactForm";

/* Toast element */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  return (
    <>
      <div>
        <ToastContainer />
        <img src="" alt="" />
        <div className="white-layer"></div>
        <img src="" alt="" />
      </div>
      <div>
        <h1 className="contact-header">Contact</h1>
        <p className="contact-text">You can find and get in touch with me on instagram <a href="https://www.instagram.com/four_kid/">@four_kid.</a><br />Alternatively if you have a query or want to get in touch please complete the form below:</p>
      </div>
      <ContactForm />
    </>
  )
}

export default Contact
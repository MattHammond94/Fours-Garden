import ContactForm from "../components/ContactForm";
import { useNavigate } from 'react-router-dom';

/* Toast element */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const navigate = useNavigate();

  const sendHome = () => {
    navigate('/the-garden')
  }

  return (
    <div className="contact-page-container">
      <div className="contact-sidebar-container">
        <img src="con-page-design.jpg" className="sidebar-img-main" />
        <div className="white-layer"></div>
        <img src="home-page-title.png" className="sidebar-img-sig" />
      </div>
      <div className="contact-elements-container">
        <h1 className="contact-header">Contact</h1>
        <p className="contact-text">You can find and get in touch with me on instagram <a href="https://www.instagram.com/four_kid/">@four_kid.</a><br />Alternatively if you have a query or want to get in touch please complete the form below:</p>
        <ToastContainer />
        <ContactForm />
        <button className="home-btn" onClick={ sendHome }>Return Home</button>
      </div>
    </div>
  )
}

export default Contact
import ContactForm from "../components/ContactForm";

/* Toast element */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-sidebar-container">
        <img src="con-page-design.jpg" className="sidebar-img-main" loading="lazy" alt="Ink grunge texture"/>
        <div className="white-layer"></div>
        <img src="home-title-resized.png" className="sidebar-img-sig" loading="lazy" alt="Ink grunge texture"/>
      </div>
      <div className="contact-elements-container">
        <a className="home-anchor" href="/the-garden">Home</a>
        <h1 className="contact-header">Contact</h1>
        <p className="contact-text">You can find me on instagram <a target='_blank' rel="noreferrer" href="https://www.instagram.com/four_kid/">@four_kid.</a> Or you can get in touch by completing the form below:</p>
        <ToastContainer />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
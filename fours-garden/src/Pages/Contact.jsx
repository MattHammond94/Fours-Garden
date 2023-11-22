import { useState } from "react";
import ContactForm from "../components/ContactForm";

/* Toast element */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const revealImage = () => {
    setImageLoaded(true);
  }

  return (
    <div className="contact-page-container">
      <div className="contact-sidebar-container">
        <div className='con-blur-layer' style={{ backgroundImage: `url(con-blur.jpg)`, display: imageLoaded ? 'none' : 'block' }} />
        <img
          src="con-page-design.jpg" 
          className="sidebar-img-main" 
          loading="lazy" 
          alt="Ink grunge texture"
          onLoad={revealImage}
        />
        <div className="white-layer"></div>
        <img src="home-title-resized.png" className="sidebar-img-sig" loading="lazy" alt="Ink grunge texture"/>
        <img 
          className="contact-nav-img" 
          src="con-page-rotated.jpg"
          alt="Ink grunge texture"
          onLoad={ revealImage }
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <a className="home-anchor" href="/the-garden">Home</a>
      </div>
      <div className="contact-elements-container">
        <h1 className="contact-header">Contact</h1>
        <p className="contact-text">You can find me on instagram <a target='_blank' rel="noreferrer" href="https://www.instagram.com/four_kid/">@four_kid.</a> Or you can get in touch by completing the form below:</p>
        <ToastContainer />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
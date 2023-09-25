import ContactForm from "../components/ContactForm";

const Contact = () => {

  return (
    <>
      <div>
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
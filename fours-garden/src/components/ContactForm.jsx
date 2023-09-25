import { useState } from "react"

const ContactForm = () => {

  return (
    <div className="contact-form">
      <form action="" method="POST">
        <label>Name:</label>
        <input type="text" placeholder="Full Name"/>
        <label>Email Address:</label>
        <input type="email" placeholder="Email Address"/>
        <label>Query:</label>
        <textarea name="Query" placeholder="Query"></textarea>
        <button className="contact-submit-btn" type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactForm
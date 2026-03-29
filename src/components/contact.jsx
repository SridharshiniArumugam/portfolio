 import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./contact.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function contact() {
  const form = useRef();
  const [captchaValid, setCaptchaValid] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();

  if (!captchaValid) {
    alert("Please verify you are human!");
    return;
  }

  emailjs.sendForm(
    "service_esaoy1t",   // Your Service ID
    "template_4k15ykd",  // Your Template ID
    form.current,
    "XLMy6fNcug4tOaNSg"  // Your Public Key
  ).then(
    () => {
      alert("Message sent successfully!");
      form.current.reset();        // ✅ clears the form
      setCaptchaValid(false);      // ✅ reset captcha state
    },
    () => {
      alert("Failed to send message. Please try again.");
    }
  );
};

  return (
    <main className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I’m always open to discussing new opportunities, collaborations, or sharing knowledge.
        </p>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={sendEmail}
          ref={form}
        >
          <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
          <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
          <textarea name="message" placeholder="Your Message" className="contact-textarea" required></textarea>
           <ReCAPTCHA
            sitekey="6LfRhJssAAAAAMjftpRKqFPyGdy_0uNMpVa05sQY"   // from Google reCAPTCHA
            onChange={() => setCaptchaValid(true)}
          />
          <button type="submit" className="contact-button">Send Message</button>
        </motion.form>
      
      </div>

    </main>
  );
}

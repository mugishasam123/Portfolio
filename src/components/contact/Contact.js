import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri';
import AnalyticsEventTracker from '../eventsTracker/AnalyticsEventTracker';
import './contact.css';

const Contact = () => {
  const gaEventTracker = AnalyticsEventTracker('Contact Me');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_gts30zg',
      'template_t2qbnqo',
      form.current,
      'Z5Ujvs7vo49NHSpip',
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Bertrand Mutangana</h5>
            <a
              href="mailto:mutanganabertrand@gmail.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => gaEventTracker('Direct Email')}
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Bertrand Mutangana</h5>
            <a
              href="https://m.me/bertrandMutangana"
              target="_blank"
              rel="noreferrer"
              onClick={() => gaEventTracker('Via Messenger')}
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Bertrand Mutangana</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+250784274110"
              target="_blank"
              rel="noreferrer"
              onClick={() => gaEventTracker('Via Whatsapp')}
            >
              Send a message
            </a>
          </article>
        </div>

        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => gaEventTracker('Text message')}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

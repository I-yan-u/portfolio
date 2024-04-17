// import React from 'react'
import style from '../css/Contact.module.css'
import { Twitter, Linkedln, Github } from '../assets'
import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (sender, subject, text) => {
    return [sender, subject, text];
  }

  const SendMail = () => {
    console.log(email, subject, message);
    const [status, response] = sendEmail(email, subject, message);
    console.log(status, response);
  }

  return (
    <section className={style.container} id="Contact">
      <footer className={style.footer}>
        <div className={style.form}>
          <p>Get In Touch</p>
          <input type="text" placeholder='Your Name'/>
          <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Your Email'/>
          <input onChange={e => setSubject(e.target.value)} type="text" placeholder='Your Subject'/>
          <textarea rows={5} onChange={e => setMessage(e.target.value)} placeholder='Enter your message'></textarea>
          <button onClick={SendMail}>Submit</button>
        </div>
        <div className={style.contacts}>
          <h3>Contacts</h3>
          <p>Email: <a href="mailto:iyanuajimobi500@gmail.com">iyanuajimobi500@gmail.com</a></p>
          <p>Phone: +2348 1251 04422</p>
          <p>Mobile: +2347 5709 7064</p>
          <p>
            Bariga, Lagos state,
            Nigeria.
          </p>
        </div>
        <div className={style.socials}>
          <div>
            <a href='https://x.com/__yandev__'><Twitter /></a>
          </div>
          <div>
            <a href='https://github.com/I-yan-u'><Github /></a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/iyanu-ajimobi-084b79249/'><Linkedln /></a>
          </div>
        </div>
        <p className={style.footerCredit}>&copy; {new Date().getFullYear()}. Portfolio Page. All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Footer;
// import React from 'react'
import style from '../css/Contact.module.css'
import { Twitter, Linkedln, Github } from '../assets'

function Footer() {
  return (
    <section className={style.container} id="Contact">
      <footer className={style.footer}>
        <div className={style.form}>
          <p>Get In Touch</p>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
          <input type="text" placeholder='Your Subject'/>
          <textarea rows={5} placeholder='Enter your message'></textarea>
          <button>Submit</button>
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
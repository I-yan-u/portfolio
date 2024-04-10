// import React from 'react'
import style from '../css/Header.module.css';
import '../css/toggleswitch.css';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '../assets';
import darkBG from '../assets/darkBG3.jpg';
import lightBG from '../assets/lightBG.jpg';


function Header() {
  const [darkMode, setMode] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [navToggle, setNavToggle] = useState(false);

  const toggleMode = () => {
    setMode(!darkMode);
    let r = document.querySelector(':root');
    if (darkMode) {
      // Dark theme!!!
      r.style.setProperty('--body-dark', '#242424');
      r.style.setProperty('--font-dark-color', 'rgba(255, 255, 255, 0.87)');
      r.style.setProperty('--button-dark-color', '#1a1a1a');
      r.style.setProperty('--a-dark-color-hover', '#535bf2');
      r.style.setProperty('--active', 'rgba(120, 120, 120, 0.513)');
      r.style.setProperty('--active-font', '#646cff');
      r.style.setProperty('--input-font', 'rgba(255, 255, 255, 0.87)');
      r.style.setProperty('--input', '#1a1a1a');
      r.style.setProperty('--input-border', '#646cff');
      r.style.setProperty('--home-background', `url(${darkBG})`);
      r.style.setProperty('--portcardbg', '#3a3a3a');
    } else {
      // Light theme!!!
      r.style.setProperty('--body-dark', '#ffffff');
      r.style.setProperty('--font-dark-color', '#213547');
      r.style.setProperty('--button-dark-color', '#7ed0ec');
      r.style.setProperty('--a-dark-color-hover', '#747bff');
      r.style.setProperty('--active', 'rgba(120, 120, 120, 0.3)');
      r.style.setProperty('--active-font', '#646cff');
      r.style.setProperty('--input-font', '#242424');
      r.style.setProperty('--input', 'rgba(41, 41, 41, 0.15)');
      r.style.setProperty('--input-border', '#7ed0ec');
      r.style.setProperty('--home-background', `url(${lightBG})`);
      r.style.setProperty('--portcardbg', '#dddddd');
    }
  }

  const handleScroll = () => {
    const position = window.scrollY;

    const header = document.querySelector('nav');
    if (position > 0) {
      header.style.setProperty('background-color', 'var(--body-dark)');
    } else {
      header.style.removeProperty('background-color');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 } // Change threshold as needed
    );

    const targetElements = document.querySelectorAll('section'); // Adjust selector as needed
    targetElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [])

  const dropDown = (event) => {
    const isChecked = event.target.checked;
    setNavToggle(isChecked);
    // console.log(isChecked);
  }


  return (
    <>
      <nav className={style.nav}>
        <div className={style.toggle}>
          <input type="checkbox" id="checkbox" className={style.checked} onClick={event => dropDown(event)} />
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </div>
        <ul className={`${style.navbar} ${navToggle ? style.nav_drop : ''}`} id='navbar'>
          <li className={`${style.list} ${activeLink === 'Home' ? style.active: ''}`}>
            <a href="#Home">Home</a>
          </li>
          <li className={`${style.list} ${activeLink === 'Portfolio' ? style.active: ''}`}>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li className={`${style.list} ${activeLink === 'Resume' ? style.active: ''}`}>
            <a href="#Resume">Resume</a>
          </li>
          <li className={`${style.list} ${activeLink === 'About' ? style.active: ''}`}>
            <a href="#About">About</a>
          </li>
          <li className={`${style.list} ${activeLink === 'Contact' ? style.active: ''}`}>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div onClick={toggleMode} className={style.icons}>
          {darkMode ? <MoonIcon size={32} color='#4a4a4a' fill='#4a4a4a' /> : <SunIcon size={32} color='#ffffff' fill='#ffffff' />}
        </div>
      </nav>
    </>
  )
}

export default Header;
// import React from 'react'
import style from '../css/About.module.css';
import iyanuImg from '../assets/iyanuImg.jpg';

function About() {
  return (
    <section id='About' className={style.container}>
      <div className={style.left}>
        <img src={iyanuImg} className={style.image} />
      </div>
      <div className={style.right}>
        <h3>About <span>Me</span></h3>
        <p>
          I am a young software engineer with experience in both
          backend and frontend web development. I have an innate
          ability to understand concepts quickly and I am also open
          minded and keen to learn new things. Excited to get my feet
          on the ground in the world of tech and making an impact.
        </p>
        <button>Download CV</button>
      </div>
    </section>
  )
}

export default About;
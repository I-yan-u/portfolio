// import React from 'react'
import style from '../css/About.module.css';
import iyanuImg from '../assets/iyanuImg.jpg';
import CV from '../../public/Resume_2024-04-18_Iyanu_Ajimobi.pdf';

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
        <button><a href={CV} download='Iyanu-ajimobi-cv.pdf'>Download CV</a></button>
      </div>
    </section>
  )
}

export default About;
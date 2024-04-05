// import { useState, useEffect, useRef } from 'react';
import style from '../css/Home.module.css';
import profilePic from '../assets/profile.jpg'
import { useState, useRef, useEffect } from 'react';
import CircleDown from '../assets/CircleDown';

function Home() {
    const targetRef = useRef(null);
    const imageRef = useRef(null);
    const paraRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        },
        {threshold: 0.5}
        );

        const target = targetRef.current;
        if(target){
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        }
    }, [])

    return (
        <section id='Home' className={style.container} ref={targetRef}>
            <div className={style.overlay}></div>
            <div className={`${style.left_div} ${isVisible ? style.image_fadein : ''}`}>
                <img ref={imageRef} id='#profilePic' src={profilePic} alt="profile picture" />
            </div>
            <div ref={paraRef} className={style.right_div}>
                <p className={`${isVisible ? style.para_slidein : ''}`}>Hi, I`m <span>Iyanu Ajimobi</span></p>
                <p className={`${isVisible ? style.para_slidein : ''}`}>This is my portfolio page</p>
            </div>
            <a href='#Portfolio'>
                <div className={style.div_arrow}>
                    <CircleDown
                      className={`${style.arrow} ${isVisible ?  style.down_arrow : ''}`}
                      color='var(--font-dark-color)'
                    />
                </div>
            </a>
        </section>

  )
}

export default Home;
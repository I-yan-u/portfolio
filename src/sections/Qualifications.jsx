import style from '../css/Resume.module.css';
import { useState, useEffect, useRef } from 'react';

function Qualifications() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

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
    <div ref={targetRef} className={isVisible ? '':''}>
        <div className={`${style.experience}`}>
          <h3 className={style.h3}>Experience</h3>
          <div className={style.card}>
            <p>
                <strong>Bookstore</strong> <span className={style.span_timeline}>March 2024</span>
                <br />
                <span className={style.span_role}>Fullstack Web development</span>
                <br />
                <span className={style.span_para}>- Developed a fullstack web application for a bookstore using React, Express, Node.js, and MongoDB (MERN).</span>
            </p>
          </div>
          <div className={style.card}>
            <p>
                <strong>SurveyApp</strong> <span className={style.span_timeline}>November 2023 - January 2024</span>
                <br />
                <span className={style.span_role}>Lead Software Engineer for dynamic form creator web application.</span>
                <br />
                <span className={style.span_para}>- Implemented a RESTful API using Python and Flask and MySQL database.</span>
                <br />
                <span className={style.span_para}>- Designed a responsive UI with vanilla Js and jQuery.</span>
            </p>
          </div>
          <div className={style.card}>
            <p>
                <strong>Exprecn</strong> <span className={style.span_timeline}>August 2023 - September 2024</span>
                <br />
                <span className={style.span_role}>Research scientist and Fullstack Software Engineer.</span>
                <br />
                <span className={style.span_para}>- Developed a software for analyzing and simulating genetic expression data using Python.</span>
                <br />
                <span className={style.span_para}>- Designed Client side and Server side of the application using Flask and MySQL database.</span>
            </p>
          </div>
        </div>
        <div className={`${style.education}`}>
            <h3 className={style.h3}>Education</h3>
            <div className={style.card}>
                <p>
                    <strong>ALX SWE Program</strong>
                    <br />
                    <span className={style.span_para}>Software Engineering certificate.</span>
                    <br />
                    <span className={style.span_para}>September 2022 - January 2024</span>
                </p>
            </div>
            <div className={style.card}>
                <p>
                    <strong>University of Lagos, Akoka</strong>
                    <br />
                    <span className={style.span_para}>Bachelor of Science in Cell Biology and Genetics.</span>
                    <br />
                    <span className={style.span_para}>January 2016 - November 2019</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Qualifications;
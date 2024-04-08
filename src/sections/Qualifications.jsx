import style from '../css/Resume.module.css';

function Qualifications() {
  return (
    <>
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
                    Software Engineering certificate.
                    <br />
                    September 2022 - January 2024
                </p>
            </div>
            <div className={style.card}>
                <p>
                    <strong>University of Lagos, Akoka</strong>
                    <br />
                    Bachelor of Science in Cell Biology and Genetics.
                    <br />
                    January 2016 - November 2019
                </p>
            </div>
        </div>
    </>
  )
}

export default Qualifications;
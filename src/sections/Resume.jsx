import style from '../css/Resume.module.css';
import { useState, useEffect, useRef } from 'react';

function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    },
    {threshold: 0.3}
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
    <section id='Resume' className={`${style.container} ${isVisible ? style.slidein : ''}`} ref={targetRef}>
      {/* <h2 className={style.h2}>Resume</h2> */}
      <div className={`${style.left}`}>
        <h3 className={style.h3}>Experience</h3>
      </div>
      <div className={`${style.right}`}>
        <h3 className={style.h3}>Education</h3>
      </div>
    </section>
  )
}

export default Resume;
import style from '../css/Resume.module.css';
import { useState, useEffect, useRef } from 'react';
import Qualifications from './Qualifications';
import Skills from './Skills';

function Resume() {
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
    <section id='Resume' className={style.container} ref={targetRef}>
      <div className={`${isVisible ? style.slidein : ''} ${style.qualifications}`}>
        <Qualifications />
      </div>
      <div className={`${isVisible ? style.slidein : ''} ${style.skills}`}>
        <Skills />
      </div>
    </section>
  )
}

export default Resume;
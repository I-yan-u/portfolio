import {useEffect, useState, useRef} from 'react'
import style from '../css/Portfolio.module.css'
import axios from 'axios'
import PortfolioCard from './PortfolioCard';
import BlankCard from './BlankCard';

const Portfolio = () => {
  const [repo1, setRepo1] = useState({});
  const [repo2, setRepo2] = useState({});
  const [repo3, setRepo3] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/I-yan-u/repos?per_page=40')
    .then(response => {
      const data = response.data;
      console.log(data.length)
      data.forEach(element => {
        switch (element.name) {
          case 'Exprecn':
            setRepo2(element)
            break;
          case 'bookstore':
            setRepo3(element)
            break;
          case 'SurveyApp':
            setRepo1(element)
            break;
          default:
            break;
        }
    })
  })
  .catch((error) => {
    console.log(error);
  })
  }, []);

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
  }, []);

  return (
    <section id='Portfolio' className={style.container} ref={targetRef}>
      <h2 className={`${style.h2} ${isVisible ? style.fadein : ''}`}>Projects</h2>
      <div className={`${style.cards} ${isVisible ? style.fadein : ''}`}>
        <PortfolioCard data={repo1} />
        <PortfolioCard data={repo2} />
        <PortfolioCard data={repo3} />
        <BlankCard data={repo3} />
      </div>
    </section>
  )
};

export default Portfolio;
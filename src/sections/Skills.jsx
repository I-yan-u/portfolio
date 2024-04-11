import style from '../css/Resume.module.css';
import sStyle from '../css/Skills.module.css';

function Skills() {
  return (
    <div className={`${style.skill_container}`}>
      <h3>Skills</h3>
      <div className={sStyle.skill} id={sStyle.python}>
        <p>Python</p>
        <div className={sStyle.levelbar_bg}>
          <p className={sStyle.levelbar_percentage}>90%</p>
          <span className={sStyle.levelbar_fg}></span>
        </div>
      </div>
      <div className={sStyle.skill} id={sStyle.nodejs}>
        <p>Node.Js</p>
        <div className={sStyle.levelbar_bg}>
          <p className={sStyle.levelbar_percentage}>75%</p>
          <span className={sStyle.levelbar_fg}></span>
        </div>
      </div>
      <div className={sStyle.skill} id={sStyle.html}>
        <p>HTML5</p>
        <div className={sStyle.levelbar_bg}>
          <p className={sStyle.levelbar_percentage}>80%</p>
          <span className={sStyle.levelbar_fg}></span>
        </div>
      </div>
      <div className={sStyle.skill} id={sStyle.css}>
        <p>CSS3</p>
        <div className={sStyle.levelbar_bg}>
          <p className={sStyle.levelbar_percentage}>75%</p>
          <span className={sStyle.levelbar_fg}></span>
        </div>
      </div>
      <div className={sStyle.skill} id={sStyle.react}>
        <p>React</p>
        <div className={sStyle.levelbar_bg}>
          <p className={sStyle.levelbar_percentage}>80%</p>
          <span className={sStyle.levelbar_fg}></span>
        </div>
      </div>
      <div className={sStyle.skill} id={sStyle.mongodb}>
        <p>MongoDB</p>
        <div className={sStyle.levelbar_bg}>
          <p className={sStyle.levelbar_percentage}>75%</p>
          <span className={sStyle.levelbar_fg}></span>
        </div>
      </div>
      <div className={sStyle.skill} id={sStyle.mysql}>
        <p>MySQL</p>
        <div className={sStyle.levelbar_bg}>
          <p className={sStyle.levelbar_percentage}>80%</p>
          <span className={sStyle.levelbar_fg}></span>
        </div>
      </div>
    </div>
  )
}
export default Skills;


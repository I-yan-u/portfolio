import style from '../css/LabelIcons.module.css';

function NameLogo() {
  return (
    <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#fafafadd"} fill={"none"}>
        <path d="M11 5L18 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 10L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 11L5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6.44444" cy="6.44444" r="4.44444" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default NameLogo;
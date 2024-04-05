import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from '../css/Cards.module.css'
import { 
    SurveyAppIcon,
    Bookstore,
    ExprecnIcon,
    ProgramLanguage,
    NameLogo,
    LikeLogo,
    CalenderIcon
} from '../assets';

const PortfolioCard = props => {
    const data = props.data;
    const [name, setName] = useState('');
    const [likes, setLikes] = useState(0);
    const [lang, setLang] = useState('');
    const [url, setUrl] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const [bgImage, setBgImage] = useState(null);


    const convertDate = (datetime) => {
        const date = datetime.split('T')[0];
        return date;
    }

    useEffect(() => {
        const setdate = async () => {
        const updt = await convertDate(data.updated_at);
        const crdt = await convertDate(data.created_at);
        setCreatedAt(crdt);
        setUpdatedAt(updt);
        };
        setdate();
        setName(data.name);
        setLikes(data.stargazers_count);
        setUrl(data.html_url);
        setLang(data.language);
        switch (data.name) {
            case 'SurveyApp':
                setBgImage(<SurveyAppIcon />)
                break;
            case 'bookstore':
                setBgImage(<Bookstore />)
                break;                    
            case 'Exprecn':
                setBgImage(<ExprecnIcon />)
                break;            
            default:
                break;
        }
    }, [data]);


  return (
    <div className={style.card}>
        <div className={style.image}>{bgImage}</div>
        <div className={style.repolabel}>{name}</div>
        <div className={style.overlay}>
            <div className={style.text}>
                <p><NameLogo /><span>Name:</span> {name}</p>
                <p><LikeLogo /><span>Likes:</span> {likes}</p>
                <p><ProgramLanguage /><span>Language:</span> {lang}</p>
                <p><CalenderIcon /><span>Create at:</span> {createdAt}</p>
                <p><CalenderIcon /><span>Last change:</span> {updatedAt}</p>
            </div>
            <button className={style.button}><a href={url}>Link</a></button>
        </div>
    </div>
  )
}

PortfolioCard.propTypes = {
    data: PropTypes.object,
    image: PropTypes.element
};

PortfolioCard.defaultProps = {
    data: {},
    image: null
};

export default PortfolioCard;
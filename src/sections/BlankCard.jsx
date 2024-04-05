import style from '../css/Cards.module.css';
import PropTypes from 'prop-types'

function BlankCard(props) {

    const handleRedirect = () => {
        const data = props.data;
        window.open(data.owner.html_url, '_blank');
    }

  return (
    <div className={`${style.card} ${style.blank}`}  onClick={handleRedirect}>
        <p>View More</p>
    </div>
  )
}

BlankCard.propTypes = {
    data: PropTypes.object
};

BlankCard.defaultProps = {
    data: {}
};

export default BlankCard;
import Bookstoreimage from '../assets/BookStorenew.jpeg';
import style from '../css/Cards.module.css'

function Bookstore() {
    return (
        <img src={Bookstoreimage}  className={style.image}/>
    )
}

export default Bookstore;
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';

function Footer() {
    return <footer>
        <div className="footer-content">
            <div className="rules">
                <p className="rules-text">Условия пользования</p>
                <p className="rules-text">Политика конфиденциальности</p>
            </div>
            <div className="socials">
                <img className="social" src={facebook} alt="" />
                <img className="social" src={twitter} alt="" />
                <img className="social" src={instagram} alt="" />
            </div>
        </div>
        <div className="author">
            <p className="author-tag">ТКБО-01-22 Балашов Е.А.</p>
        </div>
    </footer>
}

export { Footer };
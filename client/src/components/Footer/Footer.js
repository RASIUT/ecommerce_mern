import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return ( 
        <footer>
            <div className="footer__container">
                <div className="footer__items__container">
                    <div className="footer__help__container">
                        <div className="footer__help__header">
                            <h1>Help</h1>
                        </div>
                        <ul className="fotter__help__links">
                            <li className="help__link">
                                <a href="/"> Shipping</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Refund</a>
                            </li>
                            <li className="help__link">
                                <a href="/">FAQ</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Accessiblity</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h1>Contact Us</h1>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span>+123 4567 890</span>
                            </li>
                            <li className="footer__contact">
                                <EmailIcon /> <span>shop@atoz.com</span>
                            </li>
                            <li className="footer__contact">
                                <LocationOnIcon /> <span>New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social__link__container">
                        <div className="footer__social__link__header">
                            <h1>Stay Connected</h1>
                        </div>
                    <ul className="footer__social__links">
                            <li className="social__link">
                                <a href="https://www.twitter.com" target='new'><TwitterIcon /></a>
                            </li>
                            <li className="social__link">
                                <a href="https://www.instagram.com" target='new'><InstagramIcon /></a>
                            </li>
                            <li className="social__link">
                               <a href="https://www.YouTube.com" target='new'> <YouTubeIcon /></a>
                            </li>
                            <li className="social__link">
                                <a href="https://web.telegram.org/k/" target='new'><TelegramIcon /></a>
                            </li>
                            <li className="social__link">
                                <a href="https://www.facebook.com/" target='new'><FacebookIcon /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fotter__copyright__container">
                    <ul className='nav'>
                        <li className="footer__copyright">©2022 AtoZ Ltd. |</li>
                        <li className="footer__terms__condition"> | Terms & Condition |</li>
                        <li className="footer__privacy__policy">| Privacy Policy</li>
                    </ul>
                     </div>
            </div>
        </footer>
     );
}
export default Footer;
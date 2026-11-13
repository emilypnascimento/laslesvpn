import logo from '../../assets/images/Logo.svg';
import './Footer.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__inner'>
                    <div className='footer__brand'>
                        <img className='footer__logo' src={logo} alt='LaslesVPN' />
                        <p>
                            LaslesVPN is a private virtual network that has unique features and has high
                            security.
                        </p>
                        <p className='footer__copy'>©2020LaslesVPN.</p>
                    </div>
                    <div className='footer__column'>
                        <h3 className='footer__title'>Product</h3>
                        <ul>
                            <li>Download</li>
                            <li>Pricing</li>
                            <li>Locations</li>
                            <li>Server</li>
                            <li>Countries</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='footer__column'>
                        <h3 className='footer__title'>Engage</h3>
                        <ul>
                            <li>LaslesVPN</li>
                            <li>FAQ</li>
                            <li>Tutorials</li>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service </li>
                        </ul>
                    </div>
                    <div className='footer__column'>
                        <h3 className='footer__title'>Earn Money</h3>
                        <ul>
                            <li>Affiliate</li>
                            <li> Become Partner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
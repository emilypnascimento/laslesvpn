import logo from '../../assets/images/Logo.svg';

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
          </div>
        </div>
        <p className='footer__copy'>©2020LaslesVPN.</p>
      </div>
    </footer>
  );
}
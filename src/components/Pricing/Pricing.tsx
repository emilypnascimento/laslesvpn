import boxImage from '../../assets/images/Box.png';
import pricingIcon from '../../assets/images/Pricing-check.svg';
import './Pricing.scss'

export default function Pricing() {
    return (
        <section id='pricing' className='pricing'>
            <div className='container'>
                <h2 className='section-title'>Choose Your Plan</h2>
                <p className='section-text'>
                    Let's choose the package that is best for you and explore it happily and cheerfully.
                </p>
                <div className='pricing__grid'>
                    <article className='pricing__card'>
                        <img className='pricing__image' src={boxImage} alt='Imagem do plano Free' />
                        <h3 className='pricing__name'>Free Plan</h3>
                        <ul className='pricing__list'>
                            <li><img src={pricingIcon} alt='check' />Unlimited Bandwitch</li>
                            <li><img src={pricingIcon} alt='check' />Encrypted Connection</li>
                            <li><img src={pricingIcon} alt='check' />No Traffic Logs</li>
                            <li><img src={pricingIcon} alt='check' />Works on All Devices</li>
                        </ul>
                        <p className='pricing__price'>Free</p>
                        <span className='pricing__select'>Select</span>
                    </article>
                    <article className='pricing__card'>
                        <img className='pricing__image' src={boxImage} alt='Imagem do plano Standard' />
                        <h3 className='pricing__name'>Standard Plan</h3>
                        <ul className='pricing__list'>
                            <li><img src={pricingIcon} alt='check' />Unlimited Bandwitch</li>
                            <li><img src={pricingIcon} alt='check' />Encrypted Connection</li>
                            <li><img src={pricingIcon} alt='check' />Yes Traffic Logs</li>
                            <li><img src={pricingIcon} alt='check' />Works on All Devices</li>
                            <li><img src={pricingIcon} alt='check' />Connect Anyware </li>
                        </ul>
                        <p className='pricing__price'>
                            $9 <span>/ mo</span>
                        </p>
                        <span className='pricing__select'>Select</span>
                    </article>
                    <article className='pricing__card'>
                        <img className='pricing__image' src={boxImage} alt='Imagem do plano Premium' />
                        <h3 className='pricing__name'>Premium Plan</h3>
                        <ul className='pricing__list'>
                            <li><img src={pricingIcon} alt='check' />Unlimited Bandwitch</li>
                            <li><img src={pricingIcon} alt='check' />Encrypted Connection</li>
                            <li><img src={pricingIcon} alt='check' />Yes Traffic Logs</li>
                            <li><img src={pricingIcon} alt='check' />Works on All Devices</li>
                            <li><img src={pricingIcon} alt='check' />Connect Anyware </li>
                        </ul>
                        <p className='pricing__price'>
                            $12 <span>/ mo</span>
                        </p>
                        <span className='pricing__select'>Select</span>
                    </article>
                </div>
            </div>
        </section>
    );
}
import heroImage from '../../assets/images/Hero.png';
import './Hero.scss';

export default function Hero() {
    return (
        <section className='hero'>
            <div className='container hero__inner'>
                <div className='hero__content'>
                    <h1>
                        Want anything to be easy with <strong>LaslesVPN.</strong>
                    </h1>
                    <p>
                        Provide a network for all your needs with ease and fun using LaslesVPN
                        discover interesting features from us.
                    </p>
                    <span className='hero__cta'>Get Started</span>
                </div>
            </div>

            <img
                className='hero__image'
                src={heroImage}
                alt='Ilustração de uma pessoa usando o notebook com a LaslesVPN'
            />
        </section>
    );
}
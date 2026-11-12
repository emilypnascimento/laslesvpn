import featuresImage from '../../assets/images/Features.png';
import checkIcon from '../../assets/images/Check.svg';
import './Features.scss'

export default function Features() {
    return (
        <section id='features' className='features'>
            <div className='container features__inner'>
                <img
                    className='features__image'
                    src={featuresImage}
                    alt='Ilustração de uma pessoa com notebook apresentando os recursos da LaslesVPN'
                />

                <div className='features__content'>
                    <h2 className='features__title'>We Provide Many Features You Can Use</h2>
                    <p>
                        You can explore the features that we provide with fun and have their own
                        functions each feature.
                    </p>
                    <ul className='features__list'>
                        <li>
                            <img src={checkIcon} alt='check' />
                            Powerfull online protection.
                        </li>
                        <li>
                            <img src={checkIcon} alt='check' />
                            Internet without borders.
                        </li>
                        <li>
                            <img src={checkIcon} alt='check' />
                            Supercharged VPN
                        </li>
                        <li>
                            <img src={checkIcon} alt='check' />
                            No specific time limits.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
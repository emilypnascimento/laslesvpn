import networkImage from '../../assets/images/Network.png';

export default function Network() {
    return (
        <section id='network' className='network'>
            <div className='container'>
                <h2 className='section-title'>Huge Global Network of Fast VPN</h2>
                <p className='section-text'>
                    See LaslesVPN everywhere to make it easier for you when you move locations.
                </p>
                <img
                    className='network__image'
                    src={networkImage}
                    alt='Mapa com os países onde a LaslesVPN tem servidores'
                />
            </div>
        </section>
    );
}
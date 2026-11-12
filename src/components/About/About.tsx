export default function About() {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <div className='about__list'>
          <div className='about__item'>
            <span className='about__icon' aria-hidden='true' />
            <div>
              <strong className='about__value'>90+</strong>
              <span className='about__label'>Users</span>
            </div>
          </div>

          <div className='about__item'>
            <span className='about__icon' aria-hidden='true' />
            <div>
              <strong className='about__value'>30+</strong>
              <span className='about__label'>Locations</span>
            </div>
          </div>

          <div className='about__item'>
            <span className='about__icon' aria-hidden='true' />
            <div>
              <strong className='about__value'>50+</strong>
              <span className='about__label'>Servers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
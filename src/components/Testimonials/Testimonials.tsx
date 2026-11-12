import TestimonialCard from '../TestimonialCard/TestimonialCard';
import viezhPhoto from '../../assets/images/Viezh.png';
import yessicaPhoto from '../../assets/images/Yessica.png';
import kimPhoto from '../../assets/images/Kim.png';

export default function Testimonials() {
  return (
    <section id='testimonials' className='testimonials'>
      <div className='container'>
        <h2 className='section-title'>Trusted by Thousands of Happy Customer</h2>
        <p className='section-text'>
          These are the stories of our customers who have joined us with great pleasure
          when using this crazy feature.
        </p>
        <div className='testimonials__viewport'>
          <div className='testimonials__track'>
            <div className='testimonials__page'>
              <TestimonialCard
                photo={viezhPhoto}
                name='Viezh Robert'
                role='Warsaw, Poland'
                rating='4.5'
                text='Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems.'
              />
              <TestimonialCard
                photo={yessicaPhoto}
                name='Yessica Ch  risty'
                role='Shanxi, China'
                rating='4.5'
                text='I like it because I like to travel far and still can connect with high speed.'
              />
              <TestimonialCard
                photo={kimPhoto}
                name='Kim Young Jou'
                role='Seoul, South Korea'
                rating='4.5'
                text='This is very unusual for my business that currently requires a virtual private network that has high security.'
              />
            </div>

            <div className='testimonials__page'>
              <TestimonialCard
                photo={viezhPhoto}
                name='Viezh Robert'
                role='Warsaw, Poland'
                rating='4.5'
                text='Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems.'
              />
              <TestimonialCard
                photo={yessicaPhoto}
                name='Yessica Christy'
                role='Shanxi, China'
                rating='4.5'
                text='I like it because I like to travel far and still can connect with high speed.'
              />
              <TestimonialCard
                photo={kimPhoto}
                name='Kim Young Jou'
                role='Seoul, South Korea'
                rating='4.5'
                text='This is very unusual for my business that currently requires a virtual private network that has high security.'
              />
            </div>

            <div className='testimonials__page'>
              <TestimonialCard
                photo={viezhPhoto}
                name='Viezh Robert'
                role='Warsaw, Poland'
                rating='4.5'
                text='Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems.'
              />
              <TestimonialCard
                photo={yessicaPhoto}
                name='Yessica Christy'
                role='Shanxi, China'
                rating='4.5'
                text='I like it because I like to travel far and still can connect with high speed.'
              />
              <TestimonialCard
                photo={kimPhoto}
                name='Kim Young Jou'
                role='Seoul, South Korea'
                rating='4.5'
                text='This is very unusual for my business that currently requires a virtual private network that has high security.'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import viezhPhoto from '../../assets/images/Viezh.png';
import yessicaPhoto from '../../assets/images/Yessica.png';
import kimPhoto from '../../assets/images/Kim.png';
import { useState } from 'react';

export default function Testimonials() {
  const [page, setPage] = useState(0);

  const goToPrevious = () => setPage((current) => (current + 2) % 3);
  const goToNext = () => setPage((current) => (current + 1) % 3);

  return (
    <section id='testimonials' className='testimonials'>
      <div className='container'>
        <h2 className='section-title'>Trusted by Thousands of Happy Customer</h2>
        <p className='section-text'>
          These are the stories of our customers who have joined us with great pleasure
          when using this crazy feature.
        </p>

        <div className='testimonials__viewport'>
          <div
            className='testimonials__track'
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
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

        <div className='testimonials__controls'>
          <button
            type='button'
            className='testimonials__arrow'
            aria-label='Ver cartões anteriores'
            onClick={goToPrevious}
          >
            ‹
          </button>
          <div className='testimonials__dots' aria-hidden='true'>
            <span className={`testimonials__dot ${page === 0 ? 'testimonials__dot--active' : ''}`} />
            <span className={`testimonials__dot ${page === 1 ? 'testimonials__dot--active' : ''}`} />
            <span className={`testimonials__dot ${page === 2 ? 'testimonials__dot--active' : ''}`} />
          </div>
          <button
            type='button'
            className='testimonials__arrow'
            aria-label='Ver próximos cartões'
            onClick={goToNext}
          >
            ›
          </button>
        </div>
      </div>
    </section >
  );
}
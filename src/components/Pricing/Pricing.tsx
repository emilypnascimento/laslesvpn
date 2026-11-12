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
            <h3 className='pricing__name'>Free Plan</h3>
            <p className='pricing__price'>Free</p>
          </article>
          <article className='pricing__card'>
            <h3 className='pricing__name'>Standard Plan</h3>
            <p className='pricing__price'>
              $9 <span>/ mo</span>
            </p>
          </article>
          <article className='pricing__card'>
            <h3 className='pricing__name'>Premium Plan</h3>
            <p className='pricing__price'>
              $12 <span>/ mo</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
};

export default function TestimonialCard({ name, role, text }: TestimonialCardProps) {
  return (
    <article className='testimonial-card'>
      <h3 className='testimonial-card__name'>{name}</h3>
      <p className='testimonial-card__role'>{role}</p>
      <p className='testimonial-card__text'>{text}</p>
    </article>
  );
}
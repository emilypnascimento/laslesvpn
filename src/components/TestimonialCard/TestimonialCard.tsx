import starIcon from '../../assets/images/Star.svg';

type TestimonialCardProps = {
    photo: string;
    name: string;
    role: string;
    rating: string;
    text: string;
};

export default function TestimonialCard({
    photo,
    name,
    role,
    rating,
    text,
}: TestimonialCardProps) {
    return (
        <article className='testimonial-card'>
            <span className='testimonial-card__rating'>
                <img src={starIcon} alt='Estrela' /> {rating}
            </span>
            <div className='testimonial-card__person'>
                <img className='testimonial-card__photo' src={photo} alt={`Foto de ${name}`} />
                <div>
                    <h3 className='testimonial-card__name'>{name}</h3>
                    <p className='testimonial-card__role'>{role}</p>
                </div>
            </div>
            <p className='testimonial-card__text'>{text}</p>
        </article>
    );
}
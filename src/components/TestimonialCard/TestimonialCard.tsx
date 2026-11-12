type TestimonialCardProps = {
    photo: string;
    name: string;
    role: string;
    text: string;
};

export default function TestimonialCard({
    photo,
    name,
    role,
    text,
}: TestimonialCardProps) {
    return (
        <div className='testimonial-card__person'>
            <img className='testimonial-card__photo' src={photo} alt={`Foto de ${name}`} />
            <div>
                <h3 className='testimonial-card__name'>{name}</h3>
                <p className='testimonial-card__role'>{role}</p>
                <p className='testimonial-card__text'>{text}</p>
            </div>
        </div>
    );
}
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-sand-light rounded-xl shadow-lg p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gold"
                />
                <div>
                    <h3 className="font-heading text-lg text-charcoal font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-stone">{testimonial.location}</p>
                </div>
            </div>
            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-gold' : 'text-silver'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                ))}
            </div>
            <p className="font-body text-stone leading-relaxed flex-grow">"{testimonial.comment}"</p>
        </div>
    )
}

export default TestimonialCard

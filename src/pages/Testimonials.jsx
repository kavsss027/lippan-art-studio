import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import TestimonialCard from '../components/ui/TestimonialCard'
import { BUSINESS } from '../utils/constants'
import testimonialsData from '../data/testimonials.json'

const Testimonials = () => {
    const { testimonials } = testimonialsData

    return (
        <>
            <SEOHead
                title="Customer Reviews"
                description={`What customers say about Lippan Art Studio. ${BUSINESS.rating}★ Google rating with ${BUSINESS.reviewCount}+ reviews. Trusted by art lovers across India.`}
            />

            {/* Header */}
            <section className="bg-sand py-16">
                <div className="container-custom px-4 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
                        Happy Customers
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-lg mb-4">
                        <span className="text-gold">★★★★★</span>
                        <span className="text-charcoal font-heading">{BUSINESS.rating}</span>
                        <span className="text-stone">on Google</span>
                    </div>
                    <p className="text-stone max-w-xl mx-auto">
                        Real reviews from real customers. We're grateful for every piece of
                        feedback — it helps us keep improving.
                    </p>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Leave Review CTA */}
            <section className="mx-4 lg:mx-8 my-8">
                <div className="bg-mud text-sand-light py-12 px-8 rounded-xl text-center">
                    <h2 className="font-heading text-2xl md:text-3xl mb-4">
                        Bought Something? Share Your Experience
                    </h2>
                    <p className="text-stone mb-6 max-w-md mx-auto">
                        Your review helps other art lovers find us and motivates us to
                        keep creating beautiful pieces.
                    </p>
                    <a
                        href="https://g.page/r/your-google-review-link/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-charcoal px-6 py-3 rounded-lg font-medium hover:bg-sand transition-colors"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Leave a Google Review
                    </a>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-sand py-12">
                <div className="container-custom px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <p className="font-heading text-4xl text-terracotta mb-1">{BUSINESS.reviewCount}+</p>
                            <p className="text-stone text-sm">Happy Customers</p>
                        </div>
                        <div>
                            <p className="font-heading text-4xl text-terracotta mb-1">{BUSINESS.rating}</p>
                            <p className="text-stone text-sm">Google Rating</p>
                        </div>
                        <div>
                            <p className="font-heading text-4xl text-terracotta mb-1">100%</p>
                            <p className="text-stone text-sm">Handcrafted</p>
                        </div>
                        <div>
                            <p className="font-heading text-4xl text-terracotta mb-1">5+</p>
                            <p className="text-stone text-sm">Years of Craft</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shop CTA */}
            <section className="bg-terracotta text-sand-light py-12">
                <div className="container-custom px-4 text-center">
                    <h2 className="font-heading text-2xl md:text-3xl mb-4">
                        Ready to Bring Art Home?
                    </h2>
                    <p className="text-sand/80 mb-6 max-w-md mx-auto">
                        Join our growing family of customers who've added handcrafted
                        Lippan art to their spaces.
                    </p>
                    <Link to="/products" className="btn-secondary bg-charcoal hover:bg-mud-dark">
                        Explore Collection
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Testimonials

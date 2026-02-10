import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import ProductGrid from '../components/product/ProductGrid'
import TestimonialCard from '../components/ui/TestimonialCard'
import { BUSINESS, WHATSAPP_URL } from '../utils/constants'
import productsData from '../data/products.json'
import testimonialsData from '../data/testimonials.json'

const Home = () => {
    const featuredProducts = productsData.products.slice(0, 4)
    const featuredTestimonials = testimonialsData.testimonials.slice(0, 3)

    return (
        <>
            <SEOHead
                title=""
                description="Discover handcrafted Lippan art — traditional mud mirror wall decor made in Ahmedabad. Custom pieces, wedding gifts & home decor. 5★ rated. Shop now or order on WhatsApp."
            />

                        {/* Hero Section */}
                        <section className="bg-gradient-to-b from-sand-light to-sand min-h-[90vh] flex items-center">
                            <div className="container-custom section-padding">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    {/* Content */}
                                    <div className="order-2 lg:order-1 animate-fade-in-up">
                                        <div className="inline-flex items-center gap-2 bg-gold/20 text-mud px-3 py-1.5 rounded-full text-sm font-medium mb-6">
                                            <span>✨</span>
                                            <span>Handcrafted in Ahmedabad</span>
                                        </div>
            
                                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-tight mb-6">
                                            Art That Tells <br /><span className="text-terracotta">Your Story</span>
                                        </h1>
            
                                        <p className="font-body text-lg text-stone leading-relaxed mb-8 max-w-xl">
                                            Bring the timeless beauty of Lippan art into your home. Each piece is
                                            handcrafted with natural clay and mirrors, preserving a centuries-old
                                            Gujarati tradition while adding elegance to modern spaces.
                                        </p>
            
                                        <div className="flex flex-wrap gap-4 mb-8">
                                            <Link to="/products" className="btn-primary">
                                                Shop Collection
                                            </Link>
                                            <a
                                                href={WHATSAPP_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-whatsapp"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                </svg>
                                                Order on WhatsApp
                                            </a>
                                        </div>
            
                                        {/* Trust Badges */}
                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone">
                                            <span className="flex items-center gap-1.5">
                                                <span className="text-gold text-base">★</span>
                                                <strong>{BUSINESS.rating}</strong> on Google
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-stone/50"></span>
                                            <span><strong>{BUSINESS.reviewCount}+</strong> Happy Customers</span>
                                            <span className="w-1 h-1 rounded-full bg-stone/50"></span>
                                            <span>Women-owned 🏳️‍🌈</span>
                                        </div>
                                    </div>
            
                                    {/* Image */}
                                    <div className="order-1 lg:order-2 animate-fade-in">
                                        <div className="relative group">
                                            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-terracotta/20 to-gold/20 rounded-3xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <img
                                                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800"
                                                alt="Handcrafted Lippan mud mirror art featuring traditional Gujarati geometric patterns"
                                                className="w-full rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                                            />
                                            {/* Floating Badge */}
                                            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 transition-transform duration-500 group-hover:scale-105">
                                                <p className="text-xs text-stone uppercase tracking-wider mb-1">Made with</p>
                                                <p className="font-heading text-lg text-charcoal">Natural Clay</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
            {/* Trust Badges Section */}
            <section className="bg-sand py-12 border-y border-silver">
                <div className="container-custom px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="text-terracotta text-4xl mb-3">🎨</div>
                            <p className="font-heading text-xl text-charcoal">100% Handcrafted</p>
                            <p className="text-sm text-stone mt-1">Clay & Mirror Work</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-terracotta text-4xl mb-3">⭐</div>
                            <p className="font-heading text-xl text-charcoal">{BUSINESS.rating}/5 Google Rating</p>
                            <p className="text-sm text-stone mt-1">From {BUSINESS.reviewCount}+ Reviews</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-terracotta text-4xl mb-3">📍</div>
                            <p className="font-heading text-xl text-charcoal">Made in Ahmedabad</p>
                            <p className="text-sm text-stone mt-1">Authentic Local Art</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-terracotta text-4xl mb-3">💜</div>
                            <p className="font-heading text-xl text-charcoal">Inclusive & Proud</p>
                            <p className="text-sm text-stone mt-1">LGBTQ+ Friendly</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
                            Find Your Perfect Piece
                        </h2>
                        <p className="text-stone max-w-xl mx-auto">
                            From statement wall art to thoughtful gifts, discover handcrafted
                            Lippan pieces for every space and occasion.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <Link to="/products?category=wall-art" className="group relative overflow-hidden rounded-xl aspect-w-4 aspect-h-3">
                            <img
                                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400"
                                alt="Wall Art Collection"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="font-heading text-3xl text-white mb-1">Wall Art</h3>
                                    <p className="text-sand/90 text-sm">Transform your walls with tradition</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/products?category=home-decor" className="group relative overflow-hidden rounded-xl aspect-w-4 aspect-h-3">
                            <img
                                src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=400"
                                alt="Home Decor Collection"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="font-heading text-3xl text-white mb-1">Home Decor</h3>
                                    <p className="text-sand/90 text-sm">Nameplates, mirrors & clocks</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/products?category=gifts" className="group relative overflow-hidden rounded-xl aspect-w-4 aspect-h-3">
                            <img
                                src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=400"
                                alt="Gift Collection"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="font-heading text-3xl text-white mb-1">Gifting</h3>
                                    <p className="text-sand/90 text-sm">Weddings, festivals & celebrations</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section-padding bg-sand">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
                            Customer Favorites
                        </h2>
                        <p className="text-stone max-w-xl mx-auto">
                            Our most loved pieces, chosen by customers across India.
                        </p>
                    </div>

                    <ProductGrid products={featuredProducts} columns={4} />

                    <div className="text-center mt-10">
                        <Link to="/products" className="btn-outline">
                            View All Products →
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600"
                                alt="Vishwa, artist and founder of Lippan Art Studio, crafting handmade art"
                                className="rounded-2xl shadow-xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta rounded-full flex items-center justify-center text-center text-sand-light p-4">
                                <div>
                                    <p className="font-heading text-4xl font-bold">5+</p>
                                    <p className="text-xs uppercase tracking-wider">Years</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
                                Made with Heart, <br />Rooted in Heritage
                            </h2>
                            <p className="text-stone leading-relaxed mb-4">
                                Hi, I'm Vishwa. What started as a childhood fascination with the
                                beautiful mud-and-mirror walls of Kutch has become my life's purpose —
                                to bring this ancient art form into modern Indian homes.
                            </p>
                            <p className="text-stone leading-relaxed mb-8">
                                Every piece from our studio is handcrafted with natural clay and
                                carefully placed mirrors. No machines, no shortcuts — just patience,
                                skill, and a deep respect for tradition.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {BUSINESS.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-sm font-medium bg-gold/20 text-mud px-4 py-2 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link to="/about" className="btn-primary">
                                Read Our Story →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-mud">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl text-sand mb-4">
                            Loved by Art Enthusiasts
                        </h2>
                        <p className="text-stone max-w-xl mx-auto">
                            Real reviews from real customers who brought a piece of tradition home.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredTestimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/testimonials" className="btn-outline border-sand text-sand hover:bg-sand hover:text-charcoal">
                            Read All Reviews →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="section-padding bg-gradient-to-br from-sand to-gold/20">
                <div className="container-custom text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
                        Have Something Special in Mind?
                    </h2>
                    <p className="text-stone mb-8 max-w-xl mx-auto">
                        We love creating custom pieces. Share your vision — size, design,
                        colors — and let's bring your masterpiece to life together.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact" className="btn-primary">
                            Request Custom Art
                        </Link>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Instagram CTA */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom text-center">
                    <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
                        See Our Latest Work
                    </h2>
                    <p className="text-stone mb-6">
                        Follow {BUSINESS.instagram} for new designs, behind-the-scenes, and inspiration.
                    </p>
                    <a
                        href={BUSINESS.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Follow Us on Instagram
                    </a>
                </div>
            </section>
        </>
    )
}

export default Home

import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import { BUSINESS, WHATSAPP_URL } from '../utils/constants'

const About = () => {
    return (
        <>
            <SEOHead
                title="About Us - Our Story"
                description="Meet Vishwa, the artist behind Lippan Art Studio. A women-owned, LGBTQ+ friendly studio in Ahmedabad creating authentic mud mirror art since 2019."
            />

            {/* Hero */}
            <section className="bg-gradient-to-b from-sand to-sand-light py-20">
                <div className="container-custom px-4 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
                        Our Story
                    </h1>
                    <p className="text-xl text-stone max-w-2xl mx-auto">
                        Where tradition meets passion, one piece at a time
                    </p>
                </div>
            </section>

            {/* Founder Story */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600"
                                alt="Vishwa, founder and artist at Lippan Art Studio, creating handcrafted art"
                                className="rounded-2xl shadow-xl"
                            />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-full flex items-center justify-center border-4 border-sand-light">
                                <span className="text-charcoal font-heading text-xl font-bold">5+</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
                                Hi, I'm Vishwa
                            </h2>

                            <p className="text-stone leading-relaxed mb-4">
                                Growing up in Gujarat, I was always mesmerized by the beautiful mud-and-mirror
                                walls in traditional Kutchi homes. The way sunlight danced off each tiny mirror,
                                creating patterns of light across the room — it felt like magic.
                            </p>

                            <p className="text-stone leading-relaxed mb-4">
                                Years later, that childhood wonder turned into a calling. I spent time learning
                                from traditional artisans, understanding the age-old techniques of mixing clay,
                                shaping patterns, and placing mirrors just right. In 2019, I started
                                <strong className="text-charcoal"> Lippan Art Studio</strong> with a simple
                                mission: to bring this beautiful heritage art into modern Indian homes.
                            </p>

                            <p className="text-stone leading-relaxed mb-6">
                                Today, every piece that leaves our studio carries that same sense of wonder —
                                handcrafted with natural clay, thoughtfully designed, and made with genuine love
                                for the craft. When you buy from us, you're not just getting art; you're
                                keeping a tradition alive.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="inline-flex items-center gap-2 bg-gold/20 text-mud px-4 py-2 rounded-full text-sm font-medium">
                                    👩‍🎨 Women-owned
                                </span>
                                <span className="inline-flex items-center gap-2 bg-gold/20 text-mud px-4 py-2 rounded-full text-sm font-medium">
                                    🏳️‍🌈 LGBTQ+ Friendly
                                </span>
                            </div>

                            <p className="font-heading text-xl text-mud italic">
                                — Vishwa, Founder & Artist
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Art of Lippan */}
            <section className="section-padding bg-mud text-sand-light">
                <div className="container-custom">
                    <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">
                        The Art of Lippan
                    </h2>
                    <p className="text-stone text-center max-w-2xl mx-auto mb-12">
                        A centuries-old tradition from the Kutch region of Gujarat, where skilled
                        artisans transform simple clay and mirrors into breathtaking wall art.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏺</span>
                            </div>
                            <h3 className="font-heading text-xl mb-3">Natural Materials</h3>
                            <p className="text-stone text-sm leading-relaxed">
                                We use natural clay mixed with organic materials — the same
                                recipe artisans have used for generations. No synthetic shortcuts.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">✨</span>
                            </div>
                            <h3 className="font-heading text-xl mb-3">Hand-Placed Mirrors</h3>
                            <p className="text-stone text-sm leading-relaxed">
                                Each mirror is cut and placed by hand to create patterns that
                                catch light beautifully. It's a meditative, precise process.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🪞</span>
                            </div>
                            <h3 className="font-heading text-xl mb-3">Built to Last</h3>
                            <p className="text-stone text-sm leading-relaxed">
                                Properly cared for, Lippan art lasts generations. We create
                                heirloom pieces meant to be passed down.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-sand">
                <div className="container-custom">
                    <h2 className="font-heading text-3xl md:text-4xl text-charcoal text-center mb-12">
                        What We Stand For
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <div className="flex gap-4 items-start bg-sand-light p-6 rounded-xl">
                            <span className="w-8 h-8 bg-terracotta text-sand-light rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                ✓
                            </span>
                            <div>
                                <h3 className="font-heading text-lg text-charcoal mb-1">Authentic Craftsmanship</h3>
                                <p className="text-stone text-sm">Every piece is genuinely handmade — no factory production, no mass manufacturing.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start bg-sand-light p-6 rounded-xl">
                            <span className="w-8 h-8 bg-terracotta text-sand-light rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                ✓
                            </span>
                            <div>
                                <h3 className="font-heading text-lg text-charcoal mb-1">Sustainable Materials</h3>
                                <p className="text-stone text-sm">Natural clay, eco-friendly processes, minimal packaging waste.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start bg-sand-light p-6 rounded-xl">
                            <span className="w-8 h-8 bg-terracotta text-sand-light rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                ✓
                            </span>
                            <div>
                                <h3 className="font-heading text-lg text-charcoal mb-1">Cultural Preservation</h3>
                                <p className="text-stone text-sm">Keeping a beautiful tradition alive while adapting it for modern homes.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start bg-sand-light p-6 rounded-xl">
                            <span className="w-8 h-8 bg-terracotta text-sand-light rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                ✓
                            </span>
                            <div>
                                <h3 className="font-heading text-lg text-charcoal mb-1">Happy Customers</h3>
                                <p className="text-stone text-sm">Your satisfaction matters. We work with you until you love your piece.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-terracotta text-sand-light py-16 mx-4 lg:mx-8 my-8 rounded-xl">
                <div className="container-custom text-center">
                    <h2 className="font-heading text-2xl md:text-3xl mb-4">
                        Let's Create Something Together
                    </h2>
                    <p className="text-sand/80 mb-6 max-w-md mx-auto">
                        Whether you're looking for a ready piece or have a custom design in mind,
                        I'd love to help bring art into your home.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/products" className="btn-secondary bg-charcoal hover:bg-mud-dark">
                            Browse Collection
                        </Link>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline border-sand-light text-sand-light hover:bg-sand-light hover:text-charcoal"
                        >
                            Chat with Me
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

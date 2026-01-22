import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import GalleryGrid from '../components/gallery/GalleryGrid'

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600', alt: 'Traditional Lippan wall art with geometric mirror patterns' },
    { src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600', alt: 'Mandala design with intricate mud and mirror work' },
    { src: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600', alt: 'Peacock Lippan art with detailed mirror feathers' },
    { src: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600', alt: 'Custom nameplate with traditional Lippan border' },
    { src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600', alt: 'Decorative mirror frame with mud work design' },
    { src: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600', alt: 'Wedding gift set featuring complementary Lippan pieces' },
    { src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600', alt: 'Festive rangoli art for Diwali celebrations' },
    { src: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600', alt: 'Lippan wall clock combining art with function' },
    { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600', alt: 'Close-up detail of mirror placement in clay' },
    { src: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600', alt: 'Artist hands shaping traditional Lippan patterns' },
    { src: 'https://images.unsplash.com/photo-1596568955922-ab86a2d9af5e?w=600', alt: 'Traditional Kutchi geometric patterns in Lippan art' },
    { src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600', alt: 'Colorful Lippan art installation on feature wall' },
]

const categories = ['All', 'Wall Art', 'Process', 'Details', 'Installations']

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All')

    return (
        <>
            <SEOHead
                title="Art Gallery"
                description="Browse our gallery of handcrafted Lippan art. Traditional mud mirror wall art, custom pieces, and behind-the-scenes of our creative process."
            />

            {/* Page Header */}
            <section className="bg-sand py-16">
                <div className="container-custom px-4 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
                        Art Gallery
                    </h1>
                    <p className="text-stone max-w-xl mx-auto">
                        A glimpse into our world of clay and mirrors. Each piece here represents
                        hours of careful craftsmanship and a deep love for tradition.
                    </p>
                </div>
            </section>

            {/* Filter Chips */}
            <section className="bg-sand-light py-6">
                <div className="container-custom px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all ${activeFilter === category
                                        ? 'bg-terracotta text-sand-light'
                                        : 'bg-sand border border-silver text-stone hover:text-terracotta'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom">
                    <GalleryGrid images={galleryImages} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-mud text-sand-light py-16">
                <div className="container-custom px-4 text-center">
                    <h2 className="font-heading text-2xl md:text-3xl mb-4">
                        Like What You See?
                    </h2>
                    <p className="text-stone mb-6 max-w-md mx-auto">
                        Every piece in our gallery is available for purchase. Many can also
                        be customized to your preferred size and design.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/products" className="btn-primary bg-terracotta">
                            Shop Collection
                        </Link>
                        <Link to="/contact" className="btn-outline border-sand text-sand hover:bg-sand hover:text-charcoal">
                            Request Custom Piece
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery

import { useParams, Link, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import SEOHead from '../components/seo/SEOHead'
import ProductGrid from '../components/product/ProductGrid'
import { WHATSAPP_URL } from '../utils/constants'
import productsData from '../data/products.json'

const ProductDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { products } = productsData

    const product = useMemo(() => {
        return products.find(p => p.id === id)
    }, [id, products])

    const relatedProducts = useMemo(() => {
        if (!product) return []
        return products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
    }, [product, products])

    if (!product) {
        return (
            <div className="section-padding text-center">
                <div className="container-custom">
                    <h1 className="font-heading text-3xl text-charcoal mb-4">Product Not Found</h1>
                    <p className="text-stone mb-6">The product you're looking for doesn't exist.</p>
                    <Link to="/products" className="btn-primary">Browse Products</Link>
                </div>
            </div>
        )
    }

    const whatsappMessage = encodeURIComponent(
        `Hi! I'm interested in "${product.name}" (₹${product.price.toLocaleString()}). Can you share more details?`
    )

    return (
        <>
            <SEOHead
                title={product.name}
                description={product.description}
                image={product.image}
            />

            {/* Breadcrumb */}
            <section className="bg-sand py-4">
                <div className="container-custom px-4">
                    <nav className="flex items-center gap-2 text-sm text-stone">
                        <Link to="/" className="hover:text-terracotta">Home</Link>
                        <span>/</span>
                        <Link to="/products" className="hover:text-terracotta">Products</Link>
                        <span>/</span>
                        <span className="text-charcoal capitalize">{product.category.replace('-', ' ')}</span>
                        <span>/</span>
                        <span className="text-charcoal">{product.name}</span>
                    </nav>
                </div>
            </section>

            {/* Product Main */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Images */}
                        <div>
                            <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                {product.tags && product.tags.length > 0 && (
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {product.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium bg-terracotta text-sand-light px-3 py-1 rounded-full capitalize"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Thumbnails */}
                            {product.images && product.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-3">
                                    {product.images.map((img, index) => (
                                        <div key={index} className="aspect-square rounded-lg overflow-hidden bg-white">
                                            <img
                                                src={img}
                                                alt={`${product.name} view ${index + 1}`}
                                                className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div>
                            <p className="text-xs text-stone uppercase tracking-wider mb-2">
                                {product.category.replace('-', ' ')}
                            </p>

                            <h1 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
                                {product.name}
                            </h1>

                            {/* Price */}
                            <p className="font-heading text-3xl text-terracotta mb-6">
                                ₹{product.price.toLocaleString()}
                            </p>

                            {/* Description */}
                            <p className="text-stone leading-relaxed mb-6">
                                {product.description}
                            </p>

                            {/* Details */}
                            <div className="bg-white rounded-lg p-4 mb-6">
                                <h3 className="font-heading text-lg text-charcoal mb-3">Details</h3>
                                <ul className="space-y-2 text-sm text-stone">
                                    <li className="flex justify-between">
                                        <span>Dimensions</span>
                                        <span className="text-charcoal">{product.dimensions}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Availability</span>
                                        <span className={product.availability === 'in-stock' ? 'text-green-600' : 'text-orange-500'}>
                                            {product.availability === 'in-stock' ? 'In Stock' : 'Made to Order'}
                                        </span>
                                    </li>
                                    {product.customizable && (
                                        <li className="flex justify-between">
                                            <span>Customizable</span>
                                            <span className="text-gold">Yes ✨</span>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <a
                                    href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp flex-1 justify-center"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Order on WhatsApp
                                </a>
                                <Link to="/contact" className="btn-outline flex-1 text-center">
                                    Enquire Now
                                </Link>
                            </div>

                            {/* Features */}
                            <div className="flex flex-wrap gap-4 text-sm text-stone">
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Handcrafted
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Free Local Delivery
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Quality Guaranteed
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="section-padding bg-sand">
                    <div className="container-custom">
                        <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-8 text-center">
                            You May Also Like
                        </h2>
                        <ProductGrid products={relatedProducts} columns={4} />
                    </div>
                </section>
            )}

            {/* Custom Order CTA */}
            <section className="mx-4 lg:mx-8 my-8">
                <div className="bg-mud text-sand-light py-12 px-8 rounded-xl text-center">
                    <h2 className="font-heading text-2xl md:text-3xl mb-4">
                        Want Something Custom?
                    </h2>
                    <p className="text-stone mb-6 max-w-md mx-auto">
                        Let us create a unique piece just for you. Share your ideas and we'll bring them to life.
                    </p>
                    <Link to="/contact" className="btn-primary bg-terracotta hover:bg-terracotta-dark">
                        Request Custom Order
                    </Link>
                </div>
            </section>
        </>
    )
}

export default ProductDetail

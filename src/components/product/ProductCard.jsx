import { Link } from 'react-router-dom'
import { WHATSAPP_URL } from '../../utils/constants'

const ProductCard = ({ product }) => {
    const whatsappMessage = encodeURIComponent(
        `Hi! I'm interested in "${product.name}" (₹${product.price.toLocaleString()}). Can you share more details?`
    )

    return (
        <div className="card group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2">
                        {product.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-semibold bg-terracotta/90 text-sand-light px-3 py-1.5 rounded-full capitalize"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                    <Link
                        to={`/products/${product.id}`}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90 bg-sand-light text-charcoal px-5 py-3 rounded-lg font-body font-semibold text-sm hover:bg-white"
                    >
                        Quick View
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Category */}
                <p className="text-sm text-stone uppercase tracking-wider mb-1">
                    {product.category.replace('-', ' ')}
                </p>

                {/* Title */}
                <Link to={`/products/${product.id}`}>
                    <h3 className="font-heading text-xl text-charcoal hover:text-terracotta transition-colors line-clamp-2 mb-2 h-[3.75rem]">
                        {product.name}
                    </h3>
                </Link>

                {/* Price */}
                <p className="font-body text-2xl font-bold text-terracotta mb-4">
                    ₹{product.price.toLocaleString()}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    <Link
                        to={`/products/${product.id}`}
                        className="btn-outline flex-1 text-center text-sm px-4 py-2.5"
                    >
                        View Details
                    </Link>
                    <a
                        href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp text-sm px-4 py-2.5"
                        aria-label="Order on WhatsApp"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </a>
                </div>

                {/* Customizable badge */}
                {product.customizable && (
                    <p className="text-xs text-gold-darker mt-4 flex items-center justify-center gap-1.5 font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        Customizable
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProductCard

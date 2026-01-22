import { useState, useMemo } from 'react'
import SEOHead from '../components/seo/SEOHead'
import ProductGrid from '../components/product/ProductGrid'
import productsData from '../data/products.json'

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const { products, categories } = productsData

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'all') return products
        return products.filter(p => p.category === activeCategory)
    }, [activeCategory, products])

    return (
        <>
            <SEOHead
                title="Shop Lippan Art Collection"
                description="Shop handcrafted Lippan wall art, home decor, and gift items. Traditional mud mirror art made in Ahmedabad. Custom orders welcome. Starting ₹1,800."
            />

            {/* Page Header */}
            <section className="bg-sand py-16">
                <div className="container-custom px-4 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
                        Our Collection
                    </h1>
                    <p className="text-stone max-w-xl mx-auto">
                        Every piece is handcrafted with natural clay and mirrors, using
                        traditional techniques from Gujarat. Find the perfect art for your space.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="bg-sand-light py-4 sticky top-16 md:top-20 z-40 border-b border-silver">
                <div className="container-custom px-4">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all ${activeCategory === category.id
                                        ? 'bg-terracotta text-sand-light'
                                        : 'bg-white text-stone hover:text-terracotta border border-silver'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom">
                    {filteredProducts.length > 0 ? (
                        <>
                            <p className="text-stone text-sm mb-6">
                                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                            </p>
                            <ProductGrid products={filteredProducts} columns={4} />
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🎨</div>
                            <h3 className="font-heading text-2xl text-charcoal mb-2">
                                No products found
                            </h3>
                            <p className="text-stone mb-6">
                                We're adding more pieces to this category soon.
                            </p>
                            <button
                                onClick={() => setActiveCategory('all')}
                                className="btn-primary"
                            >
                                View All Products
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Custom Order CTA */}
            <section className="bg-mud text-sand-light py-12">
                <div className="container-custom px-4 text-center">
                    <h2 className="font-heading text-2xl md:text-3xl mb-4">
                        Don't See What You're Looking For?
                    </h2>
                    <p className="text-stone mb-6 max-w-xl mx-auto">
                        We love creating custom pieces! Tell us your size, design preference,
                        and color scheme — and we'll craft something unique for you.
                    </p>
                    <a
                        href="/contact"
                        className="btn-primary bg-terracotta hover:bg-terracotta-dark"
                    >
                        Request Custom Art
                    </a>
                </div>
            </section>
        </>
    )
}

export default Products

import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'

const NotFound = () => {
    return (
        <>
            <SEOHead
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Let's get you back to exploring beautiful Lippan art."
            />

            <section className="min-h-[70vh] flex items-center justify-center bg-sand-light">
                <div className="container-custom px-4 text-center">
                    <div className="text-8xl mb-6">🎨</div>
                    <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-stone text-lg mb-8 max-w-md mx-auto">
                        Oops! The page you're looking for doesn't exist.
                        Let's get you back to exploring beautiful art.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/" className="btn-primary">
                            Go Home
                        </Link>
                        <Link to="/products" className="btn-outline">
                            Browse Products
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound

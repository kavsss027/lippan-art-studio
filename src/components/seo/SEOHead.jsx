import { Helmet } from 'react-helmet-async'
import { BUSINESS } from '../../utils/constants'

const SEOHead = ({
    title,
    description,
    image = '/og-image.jpg',
    url = '',
    type = 'website'
}) => {
    const fullTitle = title
        ? `${title} | ${BUSINESS.name}`
        : `${BUSINESS.name} - ${BUSINESS.tagline} | Ahmedabad`

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={BUSINESS.name} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />
        </Helmet>
    )
}

export default SEOHead

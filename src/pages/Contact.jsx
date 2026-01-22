import { useState } from 'react'
import SEOHead from '../components/seo/SEOHead'
import { BUSINESS, WHATSAPP_URL } from '../utils/constants'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        interest: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setSubmitted(true)

        // Create WhatsApp message with form data
        const message = encodeURIComponent(
            `Hi Vishwa! I'm ${formData.name}.\n\nInterested in: ${formData.interest}\n\nMessage: ${formData.message}\n\nContact: ${formData.phone || formData.email}`
        )
        window.open(`${WHATSAPP_URL}?text=${message}`, '_blank')
    }

    const faqs = [
        {
            question: 'How do I order a custom piece?',
            answer: 'Simply fill out the form on this page or message us on WhatsApp. Share your preferred size, design style, and any specific requirements. We\'ll respond within 24 hours with a quote and timeline.'
        },
        {
            question: 'How long does delivery take?',
            answer: 'Ready-made pieces ship within 3-5 business days. Custom orders take 1-3 weeks depending on size and complexity. We\'ll share exact timelines when you order.'
        },
        {
            question: 'Do you ship across India?',
            answer: 'Yes! We ship pan-India. Each piece is carefully packed to ensure it reaches you safely. Shipping charges depend on your location.'
        },
        {
            question: 'Can I visit your studio?',
            answer: 'Absolutely! We welcome visitors at our Khokhra studio. Please message us on WhatsApp to schedule a visit so we can give you our full attention.'
        }
    ]

    const [openFaq, setOpenFaq] = useState(null)

    return (
        <>
            <SEOHead
                title="Contact Us"
                description="Get in touch with Lippan Art Studio for custom orders, inquiries, or studio visits. Located in Khokhra, Ahmedabad. Call 063544 73567 or WhatsApp us."
            />

            {/* Header */}
            <section className="bg-sand py-16">
                <div className="container-custom px-4 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
                        Let's Connect
                    </h1>
                    <p className="text-stone max-w-xl mx-auto">
                        Have a question, want a custom piece, or just want to say hi?
                        I'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                            <h2 className="font-heading text-2xl text-charcoal mb-2">
                                Send a Message
                            </h2>
                            <p className="text-stone text-sm mb-6">
                                Fill this form and I'll get back to you within 24 hours.
                            </p>

                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="text-5xl mb-4">✅</div>
                                    <h3 className="font-heading text-xl text-charcoal mb-2">
                                        Message Received!
                                    </h3>
                                    <p className="text-stone mb-4">
                                        I'll respond soon. For faster replies, chat on WhatsApp.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn-outline text-sm"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-charcoal mb-1">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-silver rounded-lg p-3 focus:border-terracotta focus:outline-none transition-colors"
                                            placeholder="What should I call you?"
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1">
                                                WhatsApp / Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full border border-silver rounded-lg p-3 focus:border-terracotta focus:outline-none transition-colors"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full border border-silver rounded-lg p-3 focus:border-terracotta focus:outline-none transition-colors"
                                                placeholder="you@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-charcoal mb-1">
                                            I'm Interested In *
                                        </label>
                                        <select
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-silver rounded-lg p-3 focus:border-terracotta focus:outline-none transition-colors bg-white"
                                        >
                                            <option value="">Select an option</option>
                                            <option value="Wall Art">Wall Art</option>
                                            <option value="Custom Nameplate">Custom Nameplate</option>
                                            <option value="Wedding/Festival Gift">Wedding/Festival Gift</option>
                                            <option value="Home Decor">Home Decor (Mirror/Clock)</option>
                                            <option value="Bulk/Corporate Order">Bulk/Corporate Order</option>
                                            <option value="Studio Visit">Studio Visit</option>
                                            <option value="Other">Something Else</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-charcoal mb-1">
                                            Tell Me More *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full border border-silver rounded-lg p-3 focus:border-terracotta focus:outline-none transition-colors resize-none"
                                            placeholder="Share details about what you're looking for — size, design preferences, timeline..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="bg-sand rounded-xl p-6">
                                <h3 className="font-heading text-xl text-charcoal mb-4">
                                    Quick Contact
                                </h3>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-charcoal">Studio Location</p>
                                            <p className="text-stone">Khokhra, Ahmedabad, Gujarat</p>
                                            <p className="text-xs text-stone mt-1">Visits by appointment only</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-charcoal">Phone</p>
                                            <a href={`tel:${BUSINESS.phone}`} className="text-terracotta hover:underline text-lg">
                                                {BUSINESS.phone}
                                            </a>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                <circle cx="12" cy="12" r="4" />
                                                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-charcoal">Instagram</p>
                                            <a
                                                href={BUSINESS.instagramUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-terracotta hover:underline"
                                            >
                                                {BUSINESS.instagram}
                                            </a>
                                            <p className="text-xs text-stone mt-1">DM for quick questions</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="flex gap-3 mt-6">
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-whatsapp flex-1 justify-center text-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
                                    >
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                    <a
                                        href={BUSINESS.instagramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600"
                                    >
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                                        </svg>
                                        Instagram
                                    </a>
                                </div>
                            </div>

                            <div className="bg-sand rounded-xl p-6">
                                <h3 className="font-heading text-xl text-charcoal mb-3">
                                    ⏰ When to Reach Me
                                </h3>
                                <ul className="space-y-2 text-stone">
                                    <li className="flex justify-between">
                                        <span>Monday – Saturday</span>
                                        <span className="text-charcoal font-medium">10 AM – 7 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-charcoal font-medium">By Appointment</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-stone mt-4">
                                    WhatsApp messages answered within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section className="bg-sand py-12">
                <div className="container-custom px-4">
                    <h2 className="font-heading text-2xl text-charcoal text-center mb-2">
                        Find Our Studio
                    </h2>
                    <p className="text-stone text-center mb-6">
                        Khokhra, Ahmedabad — Please call ahead before visiting
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-lg aspect-video max-w-4xl mx-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6277586470214!2d72.61453137535705!3d23.000711879189083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e878ea9c08705%3A0xcf4c35ac54ef8e4e!2sLippan%20Art%20studio%2FMud%20Mirror%20art%2F%20work-%20Best%20Home%20decor%20and%20gifting%20items!5e0!3m2!1sen!2sin!4v1769084297202!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lippan Art Studio Location - Khokhra, Ahmedabad"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <a
                            href="https://maps.app.goo.gl/WWJU5rQdoV7gtxhK8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-terracotta hover:underline font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Open in Google Maps →
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-sand-light">
                <div className="container-custom max-w-3xl">
                    <h2 className="font-heading text-2xl md:text-3xl text-charcoal text-center mb-2">
                        Common Questions
                    </h2>
                    <p className="text-stone text-center mb-8">
                        Quick answers to help you out
                    </p>

                    <div className="bg-white rounded-xl divide-y divide-silver overflow-hidden">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full p-4 text-left flex justify-between items-center hover:bg-sand-light transition-colors"
                                >
                                    <span className="font-heading text-charcoal pr-4">{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-terracotta flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === index && (
                                    <div className="px-4 pb-4 text-stone">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

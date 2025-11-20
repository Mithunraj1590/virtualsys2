"use client"
import Script from 'next/script';

const StructuredData = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Virtual Sys Technologies",
        "url": "https://virtualsys.com",
        "logo": "https://virtualsys.com/assets/images/footer-logo.png",
        "description": "Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. For over 17 years, we've helped companies across UAE, USA, and India accelerate their digital transformation.",
        "foundingDate": "2007",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 478 255 4004",
            "contactType": "customer service",
            "email": "info@vstbiz.com",
            "areaServed": ["IN", "AE", "US"],
            "availableLanguage": ["English"]
        },
        "address": [
            {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": "India",
                "name": "Offshore Development Center"
            },
            {
                "@type": "PostalAddress",
                "addressCountry": "AE",
                "addressLocality": "UAE",
                "name": "Business Operations"
            },
            {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressLocality": "USA",
                "name": "Corporate Office"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/virtualsys",
            "https://www.twitter.com/virtualsys",
            "https://www.linkedin.com/company/virtualsys",
            "https://www.instagram.com/virtualsys"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Offshore Development Teams & IT Staffing",
        "provider": {
            "@type": "Organization",
            "name": "Virtual Sys Technologies"
        },
        "areaServed": {
            "@type": "Place",
            "name": "Global"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Dedicated IT Staffing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Managed Software Teams"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web & Mobile App Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "UI/UX & Product Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "QA & DevOps"
                    }
                }
            ]
        }
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                strategy="afterInteractive"
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                strategy="afterInteractive"
            />
        </>
    );
};

export default StructuredData;


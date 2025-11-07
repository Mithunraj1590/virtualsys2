import { Fira_Sans, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import './assets/responsive.css';

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Virtual Sys Technologies - Dedicated Offshore Development Teams | IT Staffing & Managed Software Teams',
    template: '%s | Virtual Sys Technologies',
  },
  description: 'Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. 17+ years of excellence in IT staffing, managed software teams, web & mobile app development across UAE, USA, and India.',
  keywords: 'offshore development teams, dedicated IT staffing, managed software teams, web development, mobile app development, UI/UX design, QA & DevOps, offshore developers India, remote development team, software outsourcing, SaaS development, virtual sys technologies',
  authors: [{ name: 'Virtual Sys Technologies' }],
  creator: 'Virtual Sys Technologies',
  publisher: 'Virtual Sys Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://virtualsys.com',
    siteName: 'Virtual Sys Technologies',
    title: 'Virtual Sys Technologies - Dedicated Offshore Development Teams',
    description: 'For over 17 years, we\'ve helped companies across the UAE, USA, and India accelerate their digital transformation through dedicated offshore development teams.',
    images: [
      {
        url: '/openGraphImage.jpg',
        width: 1200,
        height: 630,
        alt: 'Virtual Sys Technologies - Offshore Development Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Sys Technologies - Dedicated Offshore Development Teams',
    description: '17+ years of excellence in offshore development, IT staffing, and managed software teams.',
    images: ['/openGraphImage.jpg'],
  },
  alternates: {
    canonical: 'https://virtualsys.com',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Virtual Sys Technologies" />
        <meta name="keywords" content="offshore development teams, dedicated IT staffing, managed software teams, web development, mobile app development, UI/UX design, QA & DevOps, offshore developers India, remote development team, software outsourcing, SaaS development" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="contact" content="hello@virtualsys.com" />
        <link rel="canonical" href="https://virtualsys.com" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Virtual Sys Technologies",
              "url": "https://virtualsys.com",
              "logo": "https://virtualsys.com/assets/images/footer-logo.png",
              "description": "Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. For over 17 years, we've helped companies across UAE, USA, and India accelerate their digital transformation.",
              "foundingDate": "2007",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-000-000-0000",
                "contactType": "customer service",
                "email": "hello@virtualsys.com",
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
              ]
            })
          }}
        />
      </head>
      <body className={`${fira_sans.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}

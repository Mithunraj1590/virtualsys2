import Image from "next/image";
import Link from "next/link";

const Footer = () => {

      const Services = [
        'Dedicated IT Staffing',
        'Managed Software Teams',
        'Web & Mobile App Development',
        'UI/UX & Product Design',
        'QA & DevOps',
      ];

      const UsefulLinks = [
        {title:'About Us', link:'/'},
        {title:'Services', link:'/'},
        {title:'Projects', link:'/'},
        {title:'Contact Us', link:'/'},
        {title:'Careers', link:'/'}
      ];  

      const LogoContent = {
        img1:'/logo.png',
        Content:'Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. For over 17 years, we\'ve helped companies across UAE, USA, and India accelerate their digital transformation with secure, agile, and transparent delivery.'
      }

      const NewsletterContent = {
            Content:'Stay updated with our latest technology insights, industry trends, and company news. Get exclusive updates on offshore development best practices and digital transformation strategies.'
      }

      const AdressContent = {
        Title:'Ready to Start Your Digital Journey?',
        Number:'+91-000-000-0000',
        Email:'hello@virtualsys.com'
      }

      const OfficeLocations = [
        {location: 'India', description: 'Offshore Development Center'},
        {location: 'UAE', description: 'Business Operations'},
        {location: 'USA', description: 'Corporate Office'}
      ]

    return (
        <div className="footer_main_area">
            <div className="address-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box">
                                <div className="address-icon">
                                    <Image src="/assets/images/address1.png" alt="img" width={35} height={35}   />
                                </div>
                                <div className="address-title">
                                    <h3>{AdressContent.Title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box2">
                                <div className="address-icon">
                                    <Image src="/assets/images/address2.png" alt="img" width={34} height={34}   />
                                </div>
                                <div className="solutek-btn">
                                    <Link href="/contact">
                                        {AdressContent.Number}
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                className="footer-area"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative'
                }}
            >
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(5, 10, 30, 0.95) 0%, rgba(255, 59, 0, 0.9) 100%)',
                        zIndex: 0
                    }}
                ></div>
                <div className="container" style={{position: 'relative', zIndex: 1}}>
                    <div className="row footer">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                <Link href="/">
                                    <Image src={LogoContent.img1} alt="Virtual Sys Technologies" width={161} height={42}   />
                                </Link>
                                </div>
                                <p className="footer-widget-text">{LogoContent.Content}</p>
                                <div style={{marginTop: '20px', marginBottom: '20px'}}>
                                    <p style={{color: '#fff', fontSize: '14px', marginBottom: '10px', opacity: 0.9}}>
                                        <strong>Email:</strong> <a href={`mailto:${AdressContent.Email}`} style={{color: '#fff', textDecoration: 'none'}}>{AdressContent.Email}</a>
                                    </p>
                                    <p style={{color: '#fff', fontSize: '14px', opacity: 0.9}}>
                                        <strong>Phone:</strong> <a href={`tel:${AdressContent.Number}`} style={{color: '#fff', textDecoration: 'none'}}>{AdressContent.Number}</a>
                                    </p>
                                </div>
                                <div className="footer-social">
                                    <div className="footer-widget-social">
                                        <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                                        <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                                        <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                        <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Quick Links</h2>
                                </div>
                                <ul>
                                {UsefulLinks.map((item, i) => (
                                    <li key={i}><Link href={item.link}>{item.title}</Link></li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Our Services</h2>
                                </div>
                                <ul>
                                {Services.map((item, i) => ( 
                                    <li key={i}><Link href="/">{item}</Link></li>
                                ))}
                                </ul>
                                <div className="widget-title" style={{marginTop: '30px'}}>
                                    <h2 style={{fontSize: '18px', marginBottom: '15px'}}>Offices</h2>
                                </div>
                                <ul>
                                {OfficeLocations.map((office, i) => (
                                    <li key={i} style={{marginBottom: '8px'}}>
                                        <span style={{color: '#fff', opacity: 0.9, fontSize: '14px'}}>
                                            <strong>{office.location}:</strong> {office.description}
                                        </span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget-newsletter">
                                <div className="widget-title">
                                    <h2>Newsletter</h2>
                                </div>
                                <p className="newsletter-text">{NewsletterContent.Content}</p>
                                <div className="Subscribe-form2">
                                    <form>
                                        <div className="form-field2">
                                            <input type="email" name="EMAIL" placeholder="Enter Your E-mail" required="" />
                                            <button className="subscribe-button" type="submit"><i className="bi bi-send"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="-copyright-text">
                                <p>© Copyright 2024 By Virtual Sys Technologies. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="copyright-list">
                                <ul>
                                    <li><Link href="/privacy">Privacy Policy</Link></li>
                                    <li><Link href="/terms">Terms of Service</Link></li>
                                    <li><Link href="/contact">Support</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
        </div>
    );
};

export default Footer;
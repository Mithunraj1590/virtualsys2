import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "../Common/MotionWrappers";

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


      const AdressContent = {
        Title:'Ready to Start Your Digital Journey?',
        Number:'UAE: +971 4 852 0449  |  USA: +1 478 800 4004  |  IND: +91 478 255 4004',
        Email:'info@vstbiz.com'
      }

      const OfficeLocations = [
        {location: 'India', description: 'Offshore Development Center'},
        {location: 'UAE', description: 'Business Operations'},
        {location: 'USA', description: 'Corporate Office'}
      ]

    return (
        <MotionSection className="footer_main_area">
            <div className="address-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box">
                                <div className="address-icon">
                                    <Image src="/assets/icons/address-primary.svg" alt="Location icon" width={48} height={48}   />
                                </div>
                                <div className="address-title">
                                    <h3>{AdressContent.Title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box2">
                                <div className="address-icon">
                                    <Image src="/assets/icons/address-phone.svg" alt="Phone icon" width={48} height={48}   />
                                </div>
                                <div className="main-btn">
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
            <div className="footer-area">
                <div className="container">
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
                    </div>
                    <div className="row copyright">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="-copyright-text">
                                <p>© Copyright 2025 By Virtual Sys Technologies. All Rights Reserved.</p>
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
        </MotionSection>
    );
};

export default Footer;
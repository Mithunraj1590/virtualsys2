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
        {title:'Careers', link:'/careers'}
      ];  

      const LogoContent = {
        img1:'/logo.png',
        Content:'Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. For over 17 years, we\'ve helped companies across UAE, USA, and India accelerate their digital transformation with secure, agile, and transparent delivery.'
      }


      const AdressContent = {
        Title:'Ready to Start Your Digital Journey?',
        Number:'UAE: +971 4 852 0449  |  USA: +1 478 800 4004',
        Email:'info@vstbiz.com'
      }

      const CompanyAddress = {
        title: 'Our Address',
        address: 'Virtual Sys Technologies, Infopark, 1st Floor, Suite #C1-5, Cherthala, Kerala 688541, IN.',
        phone1: '+91 6238 933 006',
        phone2: '+91 478 255 4004'
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
                                    <span style={{display: 'inline-block'}}>
                                        {AdressContent.Number}
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </span>
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
                                        <a href="https://www.facebook.com/virtualsystec" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link"><i className="bi bi-facebook"></i></a>
                                        <a href="https://x.com/virtualsystec" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link"><i className="bi bi-twitter"></i></a>
                                        <a href="https://www.linkedin.com/company/virtualsystec" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><i className="bi bi-linkedin"></i></a>
                                        <a href="https://www.instagram.com/virtualsystec" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><i className="bi bi-instagram"></i></a>                                        
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
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>{CompanyAddress.title}</h2>
                                </div>
                                <div style={{color: '#fff', opacity: 0.9, fontSize: '14px', lineHeight: '1.8'}}>
                                    <p style={{marginBottom: '15px'}}>{CompanyAddress.address}</p>
                                    <div style={{marginTop: '20px', marginBottom: '15px'}}>
                                        <p style={{marginBottom: '8px'}}>
                                            <strong>Phone:</strong> <a href={`tel:${CompanyAddress.phone1.replace(/\s/g, '')}`} style={{color: '#fff', textDecoration: 'none'}}>{CompanyAddress.phone1}</a>
                                        </p>
                                        <p style={{marginBottom: '0'}}>
                                            <a href={`tel:${CompanyAddress.phone2.replace(/\s/g, '')}`} style={{color: '#fff', textDecoration: 'none'}}>{CompanyAddress.phone2}</a>
                                        </p>
                                    </div>
                                    <div className="widget-title" style={{marginTop: '25px', marginBottom: '15px'}}>
                                        <h2 style={{fontSize: '18px', marginBottom: '15px'}}>Offices</h2>
                                    </div>
                                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
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
                    </div>
                    <div className="row copyright">
                        <div className="col-lg-12">
                            <div className="-copyright-text">
                                <p>© Copyright 2025 By Virtual Sys Technologies. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
        </MotionSection>
    );
};

export default Footer;
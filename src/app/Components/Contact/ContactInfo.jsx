import Image from "next/image";

const ContactInfo = () => {
    const contactInfo = [
        {
            title: "India",
            subtitle: "Offshore Development Center",
            icon: "bi-geo-alt"
        },
        {
            title: "UAE",
            subtitle: "Business Operations",
            icon: "bi-building"
        },
        {
            title: "USA",
            subtitle: "Corporate Office",
            icon: "bi-globe"
        },
        {
            title: "Email",
            subtitle: "info@vstbiz.com",
            icon: "bi-envelope",
            link: "mailto:info@vstbiz.com"
        },
        {
            title: "UAE",
            subtitle: "+971 4 852 0449",
            icon: "bi-telephone",
            link: "tel:+97148520449"
        },
        {
            title: "USA",
            subtitle: "+1 478 800 4004",
            icon: "bi-telephone",
            link: "tel:+14788004004"
        },
        {
            title: "IND",
            subtitle: "+91 478 255 4004",
            icon: "bi-telephone",
            link: "tel:+914782554004"
        }
    ];

    return (
        <div className="contact-info-area" style={{padding: '80px 0', background: '#f4f4f4'}}>
            <div className="container">
                <div className="row">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-6" style={{marginBottom: '30px'}}>
                            <div className="contact-info-box" style={{
                                background: '#fff',
                                padding: '30px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                height: '100%',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s'
                            }}>
                                <div className="contact-icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    background: '#06406D',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    <i className={`bi ${info.icon}`} style={{fontSize: '24px', color: '#fff'}}></i>
                                </div>
                                <h4 style={{color: '#050a1e', marginBottom: '10px', fontSize: '20px'}}>{info.title}</h4>
                                {info.link ? (
                                    <a href={info.link} style={{
                                        color: '#7a7a7a',
                                        textDecoration: 'none',
                                        fontSize: '16px'
                                    }}>
                                        {info.subtitle}
                                    </a>
                                ) : (
                                    <p style={{color: '#7a7a7a', margin: 0, fontSize: '16px'}}>{info.subtitle}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;


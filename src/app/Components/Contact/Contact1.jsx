"use client"
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Form from "../Form/Form";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";
import { MotionSection } from "../Common/MotionWrappers";


const Contact1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };
      
    return (
        <MotionSection 
            className="contact-area" 
            style={{
                backgroundColor: '#f8f9fc',
                position: 'relative',
                padding: '120px 0',
                zIndex: 1
            }}
        >
                <div className="container" style={{position: 'relative', zIndex: 1}}>
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="section-title text-left">
                            <SectionTitle
                                    SubTitle="CONTACT US"
                                    Title="Ready to Start Your Digital<br> Journey? <span>Let&apos;s Collaborate</span>"
                            ></SectionTitle>
                            <p className="section-title-descr" style={{marginTop: '20px', color: '#7a7a7a'}}>
                                Let&apos;s collaborate to design, build, and scale your next software success. Get in touch with our team today.
                            </p>
                            </div>
                            <Form></Form>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="contact-box">
                                <div className="contact-image-wrapper" style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    minHeight: '500px',
                                    borderRadius: '15px',
                                    overflow: 'hidden'
                                }}>
                                    <Image 
                                        src="/assets/3.png" 
                                        alt="Contact Us" 
                                        fill
                                        style={{objectFit: 'cover'}}
                                        priority
                                    />
                                    <div className="contact-overlay" style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(5, 10, 30, 0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <div className="contact-info-overlay" style={{
                                            textAlign: 'center',
                                            color: '#fff',
                                            padding: '20px'
                                        }}>
                                            <h3 style={{color: '#fff', marginBottom: '15px', fontSize: '28px'}}>Get In Touch</h3>
                                            <p style={{color: '#fff', marginBottom: '20px', fontSize: '16px'}}>
                                                Let&apos;s build something amazing together
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <VideoModal
                    isTrue={toggle}
                    iframeSrc={iframeSrc}
                    handelClose={handelClose}        
                ></VideoModal>
            </MotionSection>

    );
};

export default Contact1;
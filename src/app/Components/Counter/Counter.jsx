"use client"
import { useEffect } from 'react';
import data from '../../Data/counter.json';
import SectionTitle from '../Common/SectionTitle';

const Counter = () => {

    useEffect(() => {
        // Counter animation can be added here if needed
      }, []);
    
    return (
        <div 
            className="counter-area"
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&h=1080&fit=crop)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                padding: '100px 0',
                overflow: 'hidden'
            }}
        >
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(5, 10, 30, 0.9) 0%, rgba(255, 59, 0, 0.85) 100%)',
                    zIndex: 0
                }}
            ></div>
            <div className="container" style={{position: 'relative', zIndex: 1}}>
                <div className="row">
                    <div className="col-lg-12" style={{marginBottom: '60px'}}>
                        <div className="section-title text-center">
                            <SectionTitle
                                SubTitle="OUR ACHIEVEMENTS"
                                Title="Delivering Excellence Across<br> The <span>Globe</span>"
                            ></SectionTitle>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6" style={{marginBottom: '30px'}}>
                            <div 
                                className="counter-single-box"
                                style={{
                                    textAlign: 'center',
                                    padding: '40px 20px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '20px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div className="counter-content">
                                    <h4 
                                        className="counter"
                                        style={{
                                            fontSize: '56px',
                                            lineHeight: '1',
                                            color: '#ffffff',
                                            fontWeight: '700',
                                            marginBottom: '15px',
                                            fontFamily: 'var(--heading-font)'
                                        }}
                                    >
                                        {item.title}
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '18px',
                                            lineHeight: '1.5',
                                            color: '#ffffff',
                                            fontWeight: '500',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            margin: 0,
                                            opacity: 0.95
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Counter;
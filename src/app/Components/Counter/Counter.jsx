"use client"
import { useEffect } from 'react';
import data from '../../Data/counter.json';
import SectionTitle from '../Common/SectionTitle';
import { MotionSection, MotionStagger } from '../Common/MotionWrappers';

const Counter = () => {

    useEffect(() => {
        // Counter animation can be added here if needed
      }, []);
    
    return (
        <MotionSection 
            className="counter-area"
            style={{
                padding: '80px 0',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
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
                <MotionStagger className="row">
                    {data.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6" style={{marginBottom: '30px'}}>
                            <div 
                                className="counter-single-box"
                                style={{
                                    textAlign: 'center',
                                    padding: '40px 20px',
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(5, 10, 30, 0.2)',
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
                                            color: '#050a1e',
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
                                            color: '#7a7a7a',
                                            fontWeight: '500',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            margin: 0,
                                            opacity: 0.9
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </MotionStagger>
            </div>
        </MotionSection>
    );
};

export default Counter;
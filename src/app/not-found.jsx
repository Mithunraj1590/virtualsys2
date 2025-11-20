"use client"
import React from 'react';
import Link from 'next/link';
import HeaderStyle2 from './Components/Header/HeaderStyle2';
import Footer from './Components/Footer/Footer';

const NotFound = () => {
  return (
    <div className='main-page-area'>
      <HeaderStyle2></HeaderStyle2>
      <div className="not-found-area" style={{
        padding: '120px 0',
        background: '#f8f9fc',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="not-found-content">
                <h1 style={{
                  fontSize: '120px',
                  fontWeight: '800',
                  color: '#06406D',
                  lineHeight: '1',
                  marginBottom: '20px',
                  fontFamily: 'var(--heading-font)'
                }}>
                  404
                </h1>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#050a1e',
                  marginBottom: '20px',
                  fontFamily: 'var(--heading-font)'
                }}>
                  Page Not Found
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: '#7a7a7a',
                  marginBottom: '40px',
                  lineHeight: '1.8'
                }}>
                  Oops! The page you are looking for doesn't exist or has been moved.
                  <br />
                  Let's get you back on track.
                </p>
                <div className="not-found-buttons" style={{
                  display: 'flex',
                  gap: '20px',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <Link 
                    href="/" 
                    className="not-found-btn not-found-btn-primary"
                  >
                    Go Back Home
                  </Link>
                  <Link 
                    href="/contact" 
                    className="not-found-btn not-found-btn-secondary"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;


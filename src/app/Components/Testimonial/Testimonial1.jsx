"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/testimonial1.json';
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import { MotionSection } from "../Common/MotionWrappers";

const Testimonial1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                .testimonial-swiper {
                    padding: 0 60px 60px !important;
                    position: relative;
                }
                .testimonial-swiper .swiper-slide {
                    height: auto;
                    padding: 0 15px;
                }
                .testimonial-swiper .swiper-wrapper {
                    align-items: stretch;
                }
                .testimonial-swiper .swiper-slide > div {
                    height: 100%;
                }
                .testi-single-box {
                    background: #fff;
                    border-radius: 15px;
                    padding: 35px 30px;
                    box-shadow: 0 5px 30px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .testi-single-box:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(6, 64, 109, 0.15);
                }
                .testi-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    gap: 15px;
                }
                .testi-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    overflow: hidden;
                    flex-shrink: 0;
                    border: 3px solid #f0f0f0;
                }
                .testi-icon img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .testi-meta {
                    flex: 1;
                }
                .testi-name {
                    font-size: 18px;
                    font-weight: 600;
                    color: #050a1e;
                    margin: 0 0 5px 0;
                }
                .testi-role {
                    font-size: 14px;
                    color: #7a7a7a;
                    margin: 0;
                }
                .testi-quote {
                    color: #06406D;
                    font-size: 40px;
                    opacity: 0.2;
                }
                .testi-rating {
                    display: flex;
                    gap: 5px;
                    margin: 15px 0;
                    padding: 0;
                    list-style: none;
                }
                .testi-rating li {
                    color: #ffc107;
                    font-size: 16px;
                }
                .testi-text {
                    color: #555;
                    line-height: 1.8;
                    font-size: 15px;
                    margin: 0;
                    flex: 1;
                }
                /* Navigation Buttons */
                .testimonial-swiper .swiper-button-next,
                .testimonial-swiper .swiper-button-prev {
                    width: 50px;
                    height: 50px;
                    background: #06406D;
                    border-radius: 50%;
                    color: #fff;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(6, 64, 109, 0.2);
                }
                .testimonial-swiper .swiper-button-next:after,
                .testimonial-swiper .swiper-button-prev:after {
                    font-size: 12px;
                    font-weight: bold;
                }
                .testimonial-swiper .swiper-button-next svg,
                .testimonial-swiper .swiper-button-prev svg {
                    width: 20px;
                    height: 20px;
                }
                .testimonial-swiper .swiper-button-next:hover,
                .testimonial-swiper .swiper-button-prev:hover {
                    background: #ff3d00;
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(255, 61, 0, 0.3);
                }
                .testimonial-swiper .swiper-button-prev {
                    left: 0;
                }
                .testimonial-swiper .swiper-button-next {
                    right: 0;
                }
                /* Pagination Dots */
                .testimonial-swiper .swiper-pagination {
                    bottom: 0 !important;
                    position: relative;
                    margin-top: 40px;
                }
                .testimonial-swiper .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #06406D;
                    opacity: 0.3;
                    transition: all 0.3s ease;
                    margin: 0 6px;
                }
                .testimonial-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: #06406D;
                    width: 30px;
                    border-radius: 6px;
                    transform: scale(1.2);
                }
                @media (max-width: 1199px) {
                    .testimonial-swiper {
                        padding: 0 50px 60px !important;
                    }
                }
                @media (max-width: 767px) {
                    .testimonial-swiper {
                        padding: 0 20px 60px !important;
                    }
                    .testimonial-swiper .swiper-button-next,
                    .testimonial-swiper .swiper-button-prev {
                        display: none !important;
                    }
                }
            `}} />
            <MotionSection className="testimonial-area" style={{ padding: '120px 0', position: 'relative' }}>
                <div className="container" style={{ position: 'relative' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" style={{ marginBottom: '60px' }}>
                                <SectionTitle
                                        SubTitle="TESTIMONIALS"
                                        Title="What Our Customer <span>Says</span>"
                                ></SectionTitle>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1.1}
                                navigation={true}
                                pagination={{ 
                                    clickable: true,
                                    dynamicBullets: true
                                }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                                loop={true}
                                speed={800}
                                breakpoints={{
                                    575: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    768: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 25
                                    },
                                    1199: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 30
                                    },
                                    1399: {
                                        slidesPerView: 2.1,
                                        spaceBetween: 30
                                    }
                                }}
                                className="testimonial-swiper"
                            >
                                {data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testi-box">
                                            <div className="testi-single-box">
                                                <div className="testi-header">
                                                    <div className="testi-icon">
                                                        <Image src={item.icon || '/assets/icons/testimonial-avatar-1.svg'} alt={`${item.title} icon`} width={56} height={56}   />
                                                    </div>
                                                    <div className="testi-meta">
                                                        <h3 className="testi-name">{item.title}</h3>
                                                        <p className="testi-role">{item.subTitle}</p>
                                                    </div>
                                                    <div className="testi-quote">
                                                        <i className="bi bi-quote"></i>
                                                    </div>
                                                </div>
                                                <ul className="testi-rating">
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                </ul>
                                                <p className="testi-text">{item.desc}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </MotionSection>
        </>

    );
};

export default Testimonial1;

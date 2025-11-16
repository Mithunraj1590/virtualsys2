"use client"
import Slider from "react-slick";
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

      const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };      

    return (
        <MotionSection className="testimonial-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="TESTIMONIALS"
                                    Title="What Our Customer <span>Says</span>"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="row">
                        <div className="testi_list owl-carousel cs_slider_gap_301">
                            <Slider {...settings}>
                            {data.map((item, index)=>(
                            <div key={index} className="col-lg-12 col-md-12">
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
                            </div>
                            ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </MotionSection>

    );
};

export default Testimonial1;
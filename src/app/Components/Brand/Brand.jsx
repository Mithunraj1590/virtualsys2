"use client"
import Image from "next/image";
import Slider from "react-slick";

const Brand = () => {

    const brands = [
        'BlueForceOps',
        'Kantar',
        'Gooxoom.com',
        'PecceFitness',
        'ActiveFitness'
      ];

      const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
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
        <div className="brand-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center" style={{marginBottom: '50px'}}>
                            <h2 className="h2">Trusted By Global Innovators</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="brand_list owl-carousel">
                     <Slider {...settings}> 
                    {brands.map((brand, i) => ( 
                        <div key={i} className="col-lg-12">
                            <div className="brand-box">
                                <div className="brand-thumb">
                                    <h4 style={{
                                        fontSize: '24px',
                                        fontWeight: '600',
                                        color: '#050a1e',
                                        textAlign: 'center',
                                        margin: 0
                                    }}>{brand}</h4>
                                </div>
                            </div>
                        </div>
                        ))}
                        </Slider>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
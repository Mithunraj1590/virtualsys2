"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { slidesData } from "@/data/heroSlides";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="hero-1" id="hero">
      <Swiper
        className="swiper gt-slider hero-slider1 swiper-fade swiper-initialized swiper-horizontal swiper-autoheight swiper-watch-progress swiper-backface-hidden"
        modules={[EffectFade]}
        effect="fade"
        autoHeight
      >
        {slidesData.map((slide) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <div className="hero-inner">
              <div
                className="gt-hero-bg"
                style={{ backgroundImage: `url(${slide.bgSrc})` }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-8">
                    <div className="hero-style1">
                      <h6
                        className="hero-sub-title"
                        data-ani="slideindown"
                        data-ani-delay="0.2s"
                      >
                        <Image
                          className="me-1"
                          src={slide.titleIconSrc}
                          width={28}
                          height={12}
                          alt="icon"
                        />
                        {slide.subtitle}
                      </h6>
                      <h1 className="hero-title text-white">
                        <span
                          className="title1"
                          data-ani="slideindown"
                          data-ani-delay="0.3s"
                        >
                          {slide.title1}
                        </span>
                        <span
                          className="title2"
                          data-ani="slideindown"
                          data-ani-delay="0.4s"
                        >
                          {slide.title2}
                        </span>
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        {slide.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

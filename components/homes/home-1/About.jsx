"use client";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="about-area space fix position-reltive">
        <div className="about-wrap style1">
          <div className="container">
            <div className="about-wrapper style1">
              <div
                className="about-thumb-box wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about-thumb-box about-thumb1">
                  <Image
                    alt="thumb"
                    src="/assets/img/2.png"
                    width={439}
                    height={483}
                  />
                </div>
                <div className="about-thumb-box counter-box style1 movingX">
                  <div className="about-thumb-box counter-box_icon">
                    <Image
                      alt="icon"
                      src="/assets/img/icon/aboutIcon1_1.png"
                      width={52}
                      height={52}
                    />
                  </div>
                  <div className="about-thumb-box counter-box_counter">
                    <div>
                      <span className="counter-number">6,561</span>
                      <span className="plus">+</span>
                    </div>
                    <span>Satisfied Clients</span>
                  </div>
                </div>
                <div className="about-thumb-box line jump d-none d-sm-block" />
              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay=".6s"
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                    What We Do
                  </h5>
                  <h2 className="title text-start">
                    Empowering Businesses Through Dedicated Offshore Teams
                  </h2>
                  <p className="text">
                    Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. For over 17 years, we've helped companies across the UAE, USA, and India accelerate their digital transformation by providing full-time developers, designers, and project managers — all managed from our secure India delivery center.
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

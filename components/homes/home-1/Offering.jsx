import { offerBoxes } from "@/data/offers";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Offering() {
  return (
    <section className="offering-area fix">
      <div
        className="offering-wrap style1"
        style={{ backgroundImage: "url(/assets/img/bg/offeringBg1_1.png)" }}
      >
        <div className="container">
          <div className="title-area mx-auto">
            <h2
              className="title text-center mb-85 text-white wow fadeInUp"
              data-wow-delay=".6s"
            >
              Why Businesses Trust Us
            </h2>
          </div>
          <div className="offer-box-wrap">
            {offerBoxes.map((box, index) => (
              <div
                className="offer-box wow fadeInUp"
                data-wow-delay={box.delay}
                key={index}
              >
                <div className="content">
                  <h3 className="title">
                    <Link scroll={false} href={`/service-1`}>
                      {box.title}
                    </Link>
                  </h3>
                </div>
                <div className="icon">
                  <Image src={box.icon} width={36} height={36} alt="icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

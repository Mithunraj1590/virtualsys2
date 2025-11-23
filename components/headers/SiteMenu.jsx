"use client";

import { socialLinks } from "@/data/socials";
import { closeSideMenu } from "@/utlis/toggleSideMenu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SiteMenu() {
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        contentRef.current && // Check if click is outside .gt-menu-area
        !contentRef.current.contains(event.target)
      ) {
        closeSideMenu();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const form = useRef();

  const sandMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", form.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Message Sent successfully!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        } else {
          toast.error("Ops Message not Sent!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <div
      ref={containerRef}
      id="sideMenu"
      className="sidemenu-wrapper sidemenu-info d-none d-lg-block"
    >
      <div className="sidemenu-content" ref={contentRef}>
        <button onClick={closeSideMenu} className="closeButton sideMenuCls">
          <i className="far fa-times" />
        </button>
        <div className="widget">
          <div className="gt-widget-about">
            <div className="about-logo">
              <Link href="/">
                <Image
                  alt="techo"
                  src="/assets/img/logo-b.png"
                  width="199"
                  height="42"
                />
              </Link>
            </div>
            <p className="text">
              Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. For over 17 years, we've helped companies across the UAE, USA, and India accelerate their digital transformation.
            </p>
          </div>
        </div>
        <div className="widget">
          <h3 className="widget_title">Get In Touch</h3>
          <div className="gt-widget-contact">
            <div className="info-box_text">
              <div className="icon">
                <Image
                  alt="img"
                  src="/assets/img/icon/location-dot.svg"
                  width="18"
                  height="20"
                />
              </div>
              <div className="details">
                <p style={{ fontWeight: '600', marginBottom: '5px' }}>Office @ Infopark, INDIA</p>
                <p style={{ fontWeight: '600', marginBottom: '5px' }}>Virtual Sys Technologies</p>
                <p>Infopark, 1st Floor, Suite #C1-5,</p>
                <p>Cherthala, Kerala 688541, IN.</p>
              </div>
            </div>
            <div className="info-box_text">
              <div className="icon">
                <Image
                  alt="img"
                  src="/assets/img/icon/phone.svg"
                  width="16"
                  height="16"
                />
              </div>
              <div className="details">
                <p>
                  <a href="tel:+916238933006" className="info-box_link">
                    +91 6238 933 006
                  </a>
                </p>
                <p>
                  <a href="tel:+914782554004" className="info-box_link">
                    +91 478 255 4004
                  </a>
                </p>
              </div>
            </div>
            <div className="info-box_text">
              <div className="icon">
                <Image
                  alt="img"
                  src="/assets/img/icon/envelope.svg"
                  width="19"
                  height="16"
                />
              </div>
              <div className="details">
                <p>
                  <a
                    href="mailto:info@vstbiz.com"
                    className="info-box_link"
                  >
                    info@vstbiz.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget newsletter-widget">
      
          <div className="gt-social mt-4">
            {socialLinks.map((link, index) => (
              <a href={link.href} key={index} target="_blank" rel="noopener noreferrer">
                {link.href.includes('x.com') ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ) : (
                  <i className={link.iconClass} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

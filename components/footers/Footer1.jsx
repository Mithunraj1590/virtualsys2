"use client";
import Link from "next/link";
import Image from "next/image";
import { recentPosts } from "@/data/blogs";
import { socialLinks2 } from "@/data/socials";
import { footerLinks } from "@/data/footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";

export default function Footer1() {
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
    <footer
      className="footer-area"
      style={{ backgroundColor: "#06406D" }}
    >
      <div className="widget-area style1 pt-100 pb-80">
        <div className="shape2_1">
          <Image
            src="/assets/img/shape/footerShape1_1.png"
            width={361}
            height={372}
            alt="shape"
          />
        </div>
        <div className="shape2_2">
          <Image
            src="/assets/img/shape/footerShape2_2.png"
            width={288}
            height={383}
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="footer-layout style1">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div
                  className="widget footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="gt-widget-about">
                    <div className="about-logo">
                      <Link scroll={false} href={`/`}>
                        <Image
                          src="/assets/img/logo-w.png"
                          width={199}
                          height={42}
                          alt="Realar"
                        />
                      </Link>
                    </div>
                    <p className="about-text">
                      Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams.
                    </p>
                    <div className="gt-social style2">
                      {socialLinks2.map((link, index) => {
                        const platformName = link.href.includes('facebook') ? 'Facebook' :
                          link.href.includes('x.com') ? 'X (Twitter)' :
                          link.href.includes('linkedin') ? 'LinkedIn' :
                          link.href.includes('instagram') ? 'Instagram' : 'Social Media';
                        return (
                          <a 
                            href={link.href} 
                            key={index} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`Visit our ${platformName} page`}
                          >
                            {link.href.includes('x.com') ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                              </svg>
                            ) : (
                              <i className={link.iconClass} aria-hidden="true" />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-12">
                <div
                  className="widget widget_nav_menu footer-widget wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      {footerLinks.map((item, index) => {
                        const isExternal = item.href.startsWith('http');
                        return (
                          <li key={index}>
                            {isExternal ? (
                              <a href={item.href} target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-chevrons-right" />
                                {item.text}
                              </a>
                            ) : (
                              <Link scroll={false} href={item.href}>
                                <i className="fa-solid fa-chevrons-right" />
                                {item.text}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-12" style={{ display: 'none' }}>
                <div
                  className="widget footer-widget wow fadeInUp"
                  data-wow-delay="1.3s"
                >
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    {recentPosts.map((post) => (
                      <div className="recent-post" key={post.id}>
                        <div className="media-img">
                          <Link
                            scroll={false}
                            href={`/blog-details/${post.id}`}
                          >
                            <Image
                              src={post.imageUrl}
                              width={78}
                              height={79}
                              alt="thumb"
                            />
                          </Link>
                        </div>
                        <div className="media-body">
                          <div className="recent-post-meta">
                            <Link
                              scroll={false}
                              href={`/blog-details/${post.id}`}
                            >
                              <i className="fa-regular fa-clock" />
                              {post.date}
                            </Link>
                          </div>
                          <h4 className="post-title">
                            <Link
                              scroll={false}
                              className="text-inherit"
                              href={`/blog-details/${post.id}`}
                            >
                              {post.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div
                  className="widget widget_nav_menu footer-widget wow fadeInUp"
                  data-wow-delay="1.6s"
                >
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="checklist">
                    <div className="mb-3">
                      <p className="text-white mb-1" style={{ fontWeight: '600' }}>Office @ Infopark, INDIA</p>
                      <p className="text-white mb-2">Virtual Sys Technologies</p>
                      <p className="text-white mb-2" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                        Infopark, 1st Floor, Suite #C1-5,<br />
                        Cherthala, Kerala 688541, IN.
                      </p>
                    </div>
                    <ul className="ps-0 mb-2">
                      <li className="text-white">
                        <i className="fa-light fa-phone-volume" />
                      </li>
                      <li className="text-white">
                        <a href="tel:+916238933006" className="text-white text-decoration-none">+91 6238 933 006</a>
                      </li>
                    </ul>
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-light fa-phone-volume" />
                      </li>
                      <li className="text-white">
                        <a href="tel:+914782554004" className="text-white text-decoration-none">+91 478 255 4004</a>
                      </li>
                    </ul>
                    <form
                      ref={form}
                      onSubmit={sandMail}
                      className="email-input-container"
                      style={{ display: 'none' }}
                    >
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email address"
                        required
                      />
                      <button type="submit" id="submitButton">
                        <i className="fa-regular fa-arrow-right-long" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap bg-theme">
        <div className="container">
          <div className="copyright-layout">
            <div className="layout-text wow fadeInUp" data-wow-delay=".3s">
              <p className="copyright">
                <i className="fal fa-copyright" /> All Copyright 2025 by
                <Link scroll={false} href={`/`}>
                  Virtual Sys Technologies
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

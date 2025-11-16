"use client"
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const rightColumnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  initial: { scale: 1, opacity: 0, y: 18 },
  animate: { scale: 1, opacity: 1, y: 0 },
  hover: { scale: 1.03, y: -1 },
};

const Hero1 = ({
  bgImg,
  SubTitle,
  Title,
  Content,
  BtnText,
  BtnLink,
  mainImage,
  VideoText,
  buttons,
  managementBox
}) => {

	useEffect(() => {
        loadBackgroudImages();
      }, []);

	  const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

    return (
      <section
        className="hero-area"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: bgImg
            ? `linear-gradient(135deg, rgba(5,10,30,0.94), rgba(7,18,53,0.96)), url(${bgImg})`
            : "radial-gradient(circle at 0% 0%, #1b7ac7 0, #050a1e 45%, #020617 100%)",
          backgroundSize: bgImg ? "cover" : "auto",
          backgroundPosition: "center",
        }}
      >
        {/* subtle gradient shapes */}
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: "999px",
            background:
              "radial-gradient(circle at 30% 0%, rgba(59,130,246,0.35), transparent 60%)",
            top: "-80px",
            right: "-60px",
            pointerEvents: "none",
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "999px",
            background:
              "radial-gradient(circle at 10% 90%, rgba(251,113,133,0.45), transparent 60%)",
            bottom: "-80px",
            left: "-40px",
            pointerEvents: "none",
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="container"
          style={{ position: "relative", zIndex: 1 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="row align-items-center" style={{ padding: "40px 0 60px" }}>
            <div className="col-lg-12 col-xl-10" style={{ margin: "0 auto" }}>
              <motion.div
                className="hero-contant"
                variants={leftColumnVariants}
                style={{ maxWidth: 760 }}
              >
                {SubTitle && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "6px 16px",
                      borderRadius: "999px",
                      background: "rgba(15,23,42,0.8)",
                      border: "1px solid rgba(148,163,184,0.45)",
                      marginBottom: "18px",
                      fontSize: 12,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#E5F2FF",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        width: 7,
                        height: 7,
                        borderRadius: "999px",
                        background:
                          "radial-gradient(circle at 30% 0%, #4ade80 0, #22c55e 45%, #16a34a 100%)",
                      }}
                    />
                    {SubTitle}
                  </div>
                )}

                <h1 style={{ marginBottom: 18 }}>{parse(Title)}</h1>

                <p
                  style={{
                    maxWidth: 640,
                    marginBottom: 26,
                  }}
                >
                  {Content}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    alignItems: "center",
                  }}
                >
                  {buttons && buttons.length > 0 ? (
                    buttons.map((btn, index) => (
                      <motion.div
                        key={index}
                        className={`main-btn ${btn.variant || ""}`}
                        variants={buttonVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        transition={{ duration: 0.22 }}
                      >
                        <Link href={btn.link || "#"}>
                          {btn.text}
                          <div className="solutek-hover-btn hover-bx"></div>
                          <div className="solutek-hover-btn hover-bx2"></div>
                          <div className="solutek-hover-btn hover-bx3"></div>
                          <div className="solutek-hover-btn hover-bx4"></div>
                        </Link>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      className="main-btn"
                      variants={buttonVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      transition={{ duration: 0.22 }}
                    >
                      <Link href={BtnLink || "#"}>
                        {BtnText || "Get Started"}
                        <div className="solutek-hover-btn hover-bx"></div>
                        <div className="solutek-hover-btn hover-bx2"></div>
                        <div className="solutek-hover-btn hover-bx3"></div>
                        <div className="solutek-hover-btn hover-bx4"></div>
                      </Link>
                    </motion.div>
                  )}

                  {VideoText && (
                    <motion.button
                      type="button"
                      onClick={handelClick}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 0",
                        background: "transparent",
                        border: "none",
                        color: "#E5E7EB",
                        cursor: "pointer",
                        fontSize: 14,
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: "999px",
                          background:
                            "radial-gradient(circle at 30% 0%, #fb7185 0, #f97316 45%, #ea580c 100%)",
                          color: "#fff",
                        }}
                      >
                        <i className="bi bi-play-fill"></i>
                      </span>
                      <span style={{ textAlign: "left" }}>
                        <span
                          style={{
                            display: "block",
                            fontSize: 12,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            opacity: 0.75,
                          }}
                        >
                          Watch overview
                        </span>
                        <span style={{ fontSize: 14 }}>{VideoText}</span>
                      </span>
                    </motion.button>
                  )}
                </div>

                {managementBox && managementBox.items && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 16,
                      marginTop: 32,
                    }}
                  >
                    {managementBox.items.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        style={{
                          padding: "10px 14px",
                          borderRadius: 999,
                          border: "1px solid rgba(148,163,184,0.35)",
                          background: "rgba(15,23,42,0.7)",
                          color: "#E5E7EB",
                          fontSize: 13,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <i
                          className="bi bi-check2"
                          style={{ color: "#4ade80", fontSize: 16 }}
                        ></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
        <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handelClose}        
        ></VideoModal>
	</section>
    );
};

export default Hero1;
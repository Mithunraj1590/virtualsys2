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
  initial: { scale: 1, opacity: 0, y: 20 },
  animate: { scale: 1, opacity: 1, y: 0 },
  hover: { scale: 1.04, y: -2 },
};

const Hero1 = ({bgImg,SubTitle,Title,Content,BtnText,BtnLink,mainImage,VideoText,buttons,managementBox}) => {

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
        <div 
            className="hero-area d-flex align-items-center" 
            style={{
                backgroundImage: bgImg ? `url(${bgImg})` : 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(5, 10, 30, 0.85) 0%, rgba(255, 59, 0, 0.75) 100%)',
                    zIndex: 0
                }}
            ></div>
		<motion.div 
      className="container" 
      style={{position: 'relative', zIndex: 1}}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      >
			<div className="row hero align-items-end">
				<div className="col-lg-6">
					<motion.div 
            className="hero-contant"
            variants={leftColumnVariants}
          >
						<h1>{parse(Title)}</h1>
						<p>{Content}</p>
						{buttons && buttons.length > 0 ? (
							<div className="hero-buttons d-flex flex-wrap gap-3">
								{buttons.map((btn, index) => (
									<motion.div 
                    key={index} 
                    className={`main-btn ${btn.variant || ''}`}
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    transition={{ duration: 0.25 }}
                  >
										<Link href={btn.link || '#'}>
											{btn.text}
											<div className="solutek-hover-btn hover-bx"></div>
											<div className="solutek-hover-btn hover-bx2"></div>
											<div className="solutek-hover-btn hover-bx3"></div>
											<div className="solutek-hover-btn hover-bx4"></div>
										</Link>
									</motion.div>
								))}
							</div>
						) : (
							<motion.div 
                className="main-btn"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ duration: 0.25 }}
              >
								<Link href={BtnLink}>
									{BtnText}
									<div className="solutek-hover-btn hover-bx"></div>
									<div className="solutek-hover-btn hover-bx2"></div>
									<div className="solutek-hover-btn hover-bx3"></div>
									<div className="solutek-hover-btn hover-bx4"></div>
								</Link>
							</motion.div>
						)}
						{VideoText && (
							<motion.div 
                className="hero-video-icon" 
                onClick={handelClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >	
								<span className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"><i className="bi bi-play"></i><span>{VideoText}</span></span>
							</motion.div>
						)}
					</motion.div>
				</div>
				<div className="col-lg-6">
					<motion.div 
            className="hero-thumb position-relative" 
            style={{
						textAlign: 'center',
						position: 'relative',
						zIndex: 2
					}}
            variants={rightColumnVariants}
          >
						<motion.div 
              style={{
							position: 'relative',
							display: 'inline-block',
							borderRadius: '20px',
							overflow: 'hidden',
							boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
						}}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
							{mainImage && (
								<Image 
									src={mainImage} 
									alt="Hero" 
									width={600} 
									height={700}
									style={{
										width: '100%',
										height: 'auto',
										objectFit: 'cover',
										borderRadius: '20px'
									}}
									priority
								/>
							)}
						</motion.div>
						{managementBox && (
							<motion.div 
                className="management-box" 
                style={{
								position: 'absolute',
								right: '-20px',
								top: '50%',
								transform: 'translateY(-50%)',
								background: '#fff',
								padding: '30px',
								borderRadius: '15px',
								boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
								maxWidth: '320px',
								zIndex: 3
							}}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              >
								<h4 style={{
									color: '#050a1e',
									fontSize: '22px',
									fontWeight: '600',
									marginBottom: '12px'
								}}>{managementBox.title}</h4>
								<p style={{
									fontSize: '14px', 
									marginBottom: '15px',
									color: '#7a7a7a',
									lineHeight: '1.6'
								}}>{managementBox.subtitle}</p>
								<ul style={{listStyle: 'none', padding: 0, margin: 0}}>
									{managementBox.items && managementBox.items.map((item, index) => (
										<li key={index} style={{
											marginBottom: '10px', 
											fontSize: '14px',
											color: '#050a1e',
											display: 'flex',
											alignItems: 'center'
										}}>
											<i className="bi bi-check-circle-fill" style={{
												color: '#06406D', 
												marginRight: '10px',
												fontSize: '16px'
											}}></i>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</motion.div>
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
	</div>
    );
};

export default Hero1;
"use client"
import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/services1.json';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const cardContainerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { y: -8, scale: 1.02, boxShadow: "0 18px 40px rgba(5,10,30,0.12)" },
};

const Services1 = () => {
    return (
            <motion.div 
        className="sservice-area"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
                <div className="container">
                    <motion.div 
            className="row align-items-center"
            variants={cardContainerVariants}
          >
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <SectionTitle
                                    SubTitle="SOLUTEK COMPANY"
                                    Title="How Professional IT Services<br> Can Drive <span>Success.</span>"
                                ></SectionTitle>
                            </div>
                        </div>
                        {data.map((item, i) => (
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            <motion.div 
                    className="service-single-box"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                                <div className="service-icon">
                                    <Image src={item.icon} alt="img" width={50} height={50}   />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{item.title}</h3>
                                    <p className="service-text">{item.desc}</p>
                                    <div className="service-btn">
                                        <Link href={item.btnLink}><i className="bi bi-plus"></i><span> {item.btnText}</span></Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        ))}
                    </motion.div>
                    <div className="service-shape bounce-animate3">
                        <Image src="/assets/images/service5.png" alt="img" width={199} height={420}   />
                    </div>
                    <div className="service-shape2">
                         <Image src="/assets/images/service7.png" alt="img" width={100} height={100}   />
                    </div>
                    <div className="service-shape3 bounce-animate4">
                        <Image src="/assets/images/service8.png" alt="img" width={341} height={351}   />
                    </div>
                </div>
            </motion.div>
    );
};

export default Services1;
"use client";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

export const MotionSection = ({ children, className = "", ...rest }) => (
  <motion.div
    className={className}
    variants={fadeInUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const MotionStagger = ({ children, className = "", ...rest }) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    {...rest}
  >
    {children}
  </motion.div>
);



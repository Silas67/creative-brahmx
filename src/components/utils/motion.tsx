"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export default function Motion({
  children,
  delay = 0,
  stagger = 0.02,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const line: Variants = {
    hidden: { y: -20 },
    show: {
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const content =
    typeof children === "string" ? children.split("") : [children];

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={` inline-block ${className}`}
    >
      {content.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

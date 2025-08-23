import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-[100vw]  bg-background text-white py-[30px] relative flex flex-col justify-between font-sans">
      <div className="w-full flex items-center justify-between px-[30px] text-xl md:font-semibold max-sm:text-sm max-sm:flex-col">
        <div className="flex items-center">
          <motion.h1
            initial={{ color: "#fff" }}
            whileInView={{ color: "var(--textpri)" }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            PARIS, FRANCE UTC+1 -{" "}
          </motion.h1>
          <motion.p
            initial={{ color: "#fff" }}
            whileInView={{ color: "var(--textpri)" }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            Time
          </motion.p>
        </div>
        <motion.h1
          initial={{ color: "#fff" }}
          whileInView={{ color: "var(--textpri)" }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          For Different Brands, Built differently.
        </motion.h1>
      </div>
      <Marquee className="text-[20vw] uppercase heading font-normal leading-tight panchang">
        <motion.h1
          initial={{ color: "#fff" }}
          whileInView={{ color: "var(--textpri)" }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Creative.Brahmx{"   "}
        </motion.h1>
      </Marquee>
    </div>
  );
};

export default Footer;

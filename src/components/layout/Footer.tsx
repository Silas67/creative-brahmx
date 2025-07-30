import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="w-[100vw]  bg-black/90 text-white py-[30px] relative flex flex-col justify-between">
      <div className="w-full flex items-center justify-between px-[30px] text-xl md:font-semibold max-sm:text-sm max-sm:flex-col">
        <div className="flex items-center">
          <h1>PARIS, FRANCE UTC+1 - </h1>
          <p>Time</p>
        </div>
        <h1>For Different Brands, Built differently.</h1>
      </div>
      <Marquee className="text-[20vw] uppercase heading font-black leading-tight ">
        Abram.Designs{"   "}
      </Marquee>
    </div>
  );
};

export default Footer;

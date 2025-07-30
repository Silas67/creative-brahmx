import React from "react";
import Image from "next/image";

import Copy from "@/hooks/Copy";

const Hero = () => {
  return (
    <div className="w-[100vw] md:h-fit relative md:px-12 pb-24 lg:pt-12">
      <div className="w-full  flex items-center justify-center z-10 uppercase md:gap-12 font-sans md:text-[180px] tracking-tight max-sm:flex-col md:leading-[1em] gap-4 pointer-events-none">
        {" "}
        <Copy className="flex gap- max-sm:flex-col max-sm:items-center">
          <h1 className="max-sm:text-[104px] max-sm:leading-32 max-sm:-tracking-[0.05em]">
            Creative
          </h1>
          <h1 className="max-sm:text-[124px] max-sm:leading- max-sm:-tracking-[0.05em]">
            Brahmx
          </h1>
        </Copy>
      </div>

      <div className="w-full flex items-center justify-center max-sm:flex-col-reverse max-sm:pt-12 pointer-events-none">
        <div className="z-20 w-[240px] h-[240px]">
          <Image
            alt="image"
            src={"/images/others/20.jpg"}
            width={100}
            height={100}
            className="object-cover w-[200vw] h-full z-10"
          />
        </div>
        <div className="flex items-center justify-center md:absolute md:items-start uppercase flex-col max-sm:pb-[20px] md:left-[20vw] ">
          <Copy>
            <h1>Art Direction</h1>
          </Copy>
          <Copy>
            <h1>Web Design</h1>
          </Copy>
          <Copy>
            <h1>Motion Design</h1>
          </Copy>
          <Copy>
            <h1>Framer Devlopment</h1>
          </Copy>
        </div>
      </div>

      <div className=" w-full flex justify-between items-end text-center uppercase py-4 max-sm:flex-col max-sm:items-center pointer-events-none">
        <h1>[ ©Qoreeb2025 ]</h1>

        <Copy stagger={0.05} duration={0.5}>
          <h1 className="max-w-[500px] max-sm:hidden">
            I design memorable web experiences for brands OF ALL SIZES. I
            believe authentic storytelling is the key to engaging
            audiences,evoking emotions, and driving conversions.
          </h1>
        </Copy>

        <h1>[ ©Qoreeb2025 ]</h1>
      </div>
    </div>
  );
};

export default Hero;

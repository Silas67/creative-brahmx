"use client";
import { useRef, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import WipeTransition from "../utils/WipeTransition";
import Reveal from "../utils/Reveal";

const Loader = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".span1",
      { x: 100 },
      { x: -24, duration: 0.5, delay: 2, ease: "power3.inOut" }
    );
    tl.fromTo(
      ".span2",
      { x: -100 },
      { x: 24, duration: 0.5, ease: "power3.inOut" },
      "-=0.5"
    );
    tl.fromTo(
      ".slider",
      { scale: 0 },
      {
        scale: 1,
        transformOrigin: "center",
        duration: 1.5,
        ease: "power4.inOut",
      },
      "-=1.5"
    );
    tl.to(".span1", {
      opacity: 0,
      y: -10,
      duration: 0.5,
      delay: 5,
      ease: "power3.inOut",
    });
    tl.to(
      ".span2",
      { color: "#ff0000", duration: 1, ease: "power3.inOut" },
      "+=0.5"
    );
    tl.to(
      ".span2",
      { opacity: 0, filter: "blur(100px)", duration: 1, ease: "power3.inOut" },
      "+=0.5"
    );

    return () => tl.kill(); // Cleanup
  });
  return (
    <div className="w-[100vw] bg-background text-primary relative h-[100vh] flex items-center justify-center flex-col overflow-hidden">
      <div className="group flex items-center justify-center uppercase text-2xl text-nowrap max-sm:scale-[0.5]">
        <div className="span1">
          <Reveal className="supreme">Creative</Reveal>
        </div>

        <div className="w-[200px] h-[250px] slider">
          <WipeTransition />
        </div>

        <div className=" span2">
          <Reveal className="supreme" delay={0.9}>
            Abraham
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Loader;

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const containerRef = useRef(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const positionMapDesktop = [
    { top: "270vh", left: "5vw", scale: 0.8 },
    { top: "15vh", left: "60vw", scale: 1.2 },
    { top: "35vh", left: "30vw", scale: 1 },
    { top: "55vh", left: "75vw", scale: 0.9 },
    { top: "15vh", left: "5vw", scale: 1.3 },
    { top: "275vh", left: "80vw", scale: 0.7 },
    { top: "125vh", left: "10vw", scale: 1.1 },
    { top: "135vh", left: "60vw", scale: 1 },
    { top: "175vh", left: "65vw", scale: 0.85 },
    { top: "205vh", left: "45vw", scale: 1.25 },
    { top: "275vh", left: "20vw", scale: 0.7 },
    { top: "275vh", left: "50vw", scale: 0.7 },
    { top: "300vh", left: "10vw", scale: 0.7 },

    // { top: "195vh", left: "85vw", scale: 0.95 },
    // { top: "235vh", left: "15vw", scale: 1.2 },
    // { top: "255vh", left: "55vw", scale: 0.8 },
    // { top: "240vh", left: "35vw", scale: 1 },
    // { top: "250vh", left: "70vw", scale: 1.15 },
    // { top: "260vh", left: "25vw", scale: 0.9 },
    // { top: "265vh", left: "90vw", scale: 1.3 },
    // { top: "230vh", left: "45vw", scale: 1 },
    // { top: "215vh", left: "5vw", scale: 0.75 },
    // { top: "300vh", left: "60vw", scale: 1.1 },
  ];

  const positionMapMobile = [
    { top: "5vh", left: "10vw", scale: 0.7 },
    { top: "15vh", left: "50vw", scale: 1 },
    { top: "30vh", left: "20vw", scale: 0.9 },
    { top: "45vh", left: "65vw", scale: 0.8 },
    { top: "60vh", left: "5vw", scale: 1.1 },
    { top: "75vh", left: "40vw", scale: 0.7 },
    { top: "90vh", left: "25vw", scale: 0.85 },
    { top: "105vh", left: "55vw", scale: 0.95 },
    { top: "120vh", left: "15vw", scale: 0.8 },
    { top: "135vh", left: "35vw", scale: 1 },

    { top: "150vh", left: "60vw", scale: 0.9 },
    { top: "165vh", left: "10vw", scale: 1 },
    { top: "180vh", left: "45vw", scale: 0.7 },
  ];

  const positionMap = isMobile ? positionMapMobile : positionMapDesktop;

  useGSAP(() => {
    const speedMap = imageRefs.current.map(
      () => -1 * (Math.random() * 200 + 100)
    );

    ScrollTrigger.create({
      trigger: ".pin-section",
      start: "top top",
      end: "100% top",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        imageRefs.current.forEach((img, i) => {
          if (!img) return;
          gsap.to(img, {
            y: `${speedMap[i] * progress}vw`,
            ease: "back",
            duration: 0.5,
          });
        });
      },
    });
  }, []);

  return (
    <div ref={containerRef} className=" w-screen relative bg-textpri">
      <div className="pin-section h-screen w-full flex justify-center overflow-hidden bg-textpri">
        <div className="absolute top-24 flex items-center flex-col gap-24">
          <h1 className="tracking-[0.5em] -rotate-90 text-background panchang">
            Projects
          </h1>
          <button className="rounded-full text-background panchang hover:bg-white hover:text-black transition-all text-sm">
            MORE
          </button>
        </div>

        <div className="relative w-full h-full ">
          {Array.from({ length: isMobile ? 12 : 12 }).map((_, i) => (
            <Image
              key={i}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              src={`/images/others/${i + 1}.jpg`}
              alt="/"
              width={200}
              height={200}
              style={{
                top: positionMap[i]?.top,
                left: positionMap[i]?.left,
                transform: `scale(${positionMap[i]?.scale || 1})`,
              }}
              className="absolute w-[200px] h-auto max-sm:w-[150px] md:w-[180px] lg:w-[200px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

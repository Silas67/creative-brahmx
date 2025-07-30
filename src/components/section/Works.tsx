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

  const positionMap = imageRefs.current.map(() => ({
    top: Math.random() * 100 + "vh", // Random top between 0–100vh
    left: Math.random() * 100 + "vw", // Random left between 0–80vw
  }));

  useGSAP(() => {
    const speedMap = imageRefs.current.map(
      () => -1 * (Math.random() * 300 + 100)
    );
    const positionMap = imageRefs.current.map(() => ({
      top: Math.random() * 100 + "vh",
      left: Math.random() * 80 + "vw",
    }));

    // Apply positions immediately
    imageRefs.current.forEach((img, i) => {
      if (img) {
        img.style.top = positionMap[i].top;
        img.style.left = positionMap[i].left;
      }
    });

    ScrollTrigger.create({
      trigger: ".pin-section",
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        imageRefs.current.forEach((img, i) => {
          if (!img) return;
          gsap.to(img, {
            y: `${speedMap[i] * progress}vw`,
            ease: "power3.out",
          });
        });
      },
    });
  }, []);

  return (
    <div ref={containerRef} className=" w-screen relative bg-[#dbd5b5]">
      <div className="pin-section h-screen w-full flex items-center justify-center overflow-hidden bg-[#dbd5b5]">
        <div className="absolute font-bold">
          <h1>Projects</h1>
        </div>

        <div className="relative w-full h-full ">
          {Array.from({ length: 7 }).map((_, i) => (
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
              }}
              className="absolute w-[200px] h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

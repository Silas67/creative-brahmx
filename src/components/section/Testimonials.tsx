import React, { useRef } from "react";
import Masonry from "react-masonry-css";
import { testimonials } from "@/components/utils/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

const Testimonials = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: " #efead2" },
      {
        backgroundColor: "#24231f",
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "10% top ",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div ref={containerRef} className="w-[100vw] py-24 px-[30px] space-y-12">
      <div className="w-full flexcent flex-col">
        <p className="text-xs">Avis Clients</p>
        <h1 className="font-bold text-xl">
          Inutile d’en rajouter, ils l’ont déjà dit.
        </h1>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg">
            <p className="text-sm">{t.word}</p>
            <h4 className="font-bold mt-4">{t.name}</h4>
            <p className="text-xs text-gray-400">{t.job}</p>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Testimonials;

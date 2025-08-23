import React, { useState, useRef } from "react";
import { ImageCon } from "@/components/utils/ImageCon";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const expertise = [
  {
    name: "Strategie de marque",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
  {
    name: "Identite Visualle",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
  {
    name: "Site Internet",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
  {
    name: "Direction Artistique",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
  {
    name: "Event & Community",
    details:
      "La stratégie de marque permet de poser les fondations d’une identité cohérente. Elle sert à définir votre mission, clarifier vos valeurs, identifier vos cibles et construire un positionnement clair. C’est ce qui permet à une marque de se différencier, d’exister avec sens, et de parler à la bonne audience.",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: "#24231f" },
      {
        backgroundColor: "#efead2",
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "20% top ",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div
      ref={containerRef}
      className="w-[100vw] h-[150vh] flex justify-center items-center text-center flex-col relative py-24 max-sm:px-[15px] bg-[#b9b392]"
    >
      <div className="text-center md:flex items-center justify-center flex-col relative gap-12 max-sm:hidden ">
        <p className="text-textpri font-sans font-bold">Expertise</p>
        <div className="text-center flex flex-col items-center justify-center">
          {" "}
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-[1em] panchang text-muted hover:text-textpri transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            <span>Strategy </span>
            <ImageCon
              src={"/images/others/1.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
            <span>Mark</span>
          </div>
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-[1em] panchang text-muted hover:text-textpri transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            <ImageCon
              src={"/images/others/2.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
            <span>Visual Identity</span>
          </div>
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-[1em] panchang text-muted hover:text-textpri transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            <ImageCon
              src={"/images/others/3.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
            Website Creation
          </div>
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-[1em] panchang text-muted hover:text-textpri transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            Art Director
            <ImageCon
              src={"/images/others/4.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
          </div>
          <div className="lg:text-[60px] sm:text-[40px] sm:leading-loose  font-bold uppercase lg:leading-[1em] panchang text-muted hover:text-textpri transition-all duration-500 cursor-pointer flex items-center gap-4 group">
            EVENT & COMMUNITY
            <ImageCon
              src={"/images/others/5.jpg"}
              className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
        <h1 className="uppercase font-bold underline underline-offset-8 hover:text-muted transition-all duration-500 font-sans">
          View Services
        </h1>
      </div>

      <div className="text-center max-sm:flex items-center justify-center flex-col relative gap-4 md:hidden">
        <p className="text-neutral-500 ">Expertise</p>
        <div>
          {expertise.map((el, idx) => (
            <div key={idx} className="border-b ">
              <button
                onClick={() => toggleSection(idx)}
                className="flex w-[100vw] justify-between px-[10px] text-[30px] font-bold items-center mb-[4px] mt-8"
              >
                <span className="">{el.name}</span>
                <Icon icon="line-md:plus" width="24" height="24" />
              </button>
              <motion.div
                layout
                initial={{ height: 0 }}
                animate={{
                  height: openSection === idx ? "320px" : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden origin-top px-4 pt-4 space-y-4"
              >
                <p className="text-left">{el.details}</p>
                <ImageCon src="/images/floating_1.jpg" />
              </motion.div>
            </div>
          ))}
        </div>
        <h1 className="uppercase font-bold underline underline-offset-8 hover:text-neutral-400 transition-all duration-500 mt-12">
          Decouvrir Les Services
        </h1>
      </div>
    </div>
  );
};

export default Services;

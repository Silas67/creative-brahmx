import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Reveal({
  children,
  className,
  delay,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    const spans = textRef.current.querySelectorAll("span");
    gsap.fromTo(
      spans,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        delay: delay,
        ease: "power3.out",
      }
    );
  }, []);

  const text = children;
  return (
    <div className=" max-h-[100px] overflow-hidden flex " ref={textRef}>
      {text.split("").map((char, i) => (
        <span key={i} className={`flex ${className}`}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

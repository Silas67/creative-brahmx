"use client";
import React, { useRef, cloneElement, isValidElement } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { filter } from "framer-motion/client";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  duration = 1,
  stagger = 0.1,
  className = "",
}) {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const lines = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      lines.current = [];
      elementRef.current = [];
      let elements = [];

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
          type: "words, chars",
          mask: "chars",
          charsClass: "char++",
        });

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent === "0px") {
          if (split.chars.length > 0) {
            const char = split.chars[0];
            char.style.paddingLeft = textIndent;
          }

          element.style.textIndent = "0";
        }

        lines.current.push(...split.chars);
      });

      gsap.set(lines.current, { y: "100%", opacity: 0 });

      const animateProps = {
        y: "0%",

        opacity: 1,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: "power4.out",
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animateProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(lines.current, animateProps);
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split && typeof split.revert === "function") {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  // If it's a single valid React element, clone it and attach the ref
  if (isValidElement(children)) {
    return cloneElement(children, {
      ref: (node) => {
        if (node) containerRef.current = node;
      },
    });
  }

  // Otherwise wrap in a container and animate the children inside
  return (
    <div ref={containerRef} data-copy-wrapper="true" className={`${className}`}>
      {children}
    </div>
  );
}

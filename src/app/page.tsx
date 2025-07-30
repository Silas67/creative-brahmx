"use client";
import Header from "@/components/layout/Header";
import Hero from "@/components/section/Hero";
import Intro from "@/components/section/Intro";
import Works from "@/components/section/Works";
import useLenis from "@/hooks/useLenis";
import { useState, useEffect } from "react";

export default function Home() {
  useLenis();
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroVisible(false);
    }, 0); // Animation duration
    return () => clearTimeout(timer);
  }, [isIntroVisible]);

  return (
    <>
      {isIntroVisible ? (
        <Intro />
      ) : (
        <main
          className={`w-[100vw] overflow-hidden grid relative ${
            isIntroVisible
              ? "opacity-0 transition-all duration-500"
              : "opacity-100 transition-all duration-500"
          }`}
        >
          <Header />
          <section id="home">
            <Hero />
          </section>
          <section>
            <Works />
          </section>
        </main>
      )}
    </>
  );
}

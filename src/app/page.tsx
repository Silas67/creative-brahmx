"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Intro from "@/components/section/Intro";
import Services from "@/components/section/Services";
import Testimonials from "@/components/section/Testimonials";
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
          className={`w-full overflow-hidden  relative ${
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
          <section id="services">
            <Services />
          </section>
          <section id="about">
            <About />
          </section>
          <section>
            <Testimonials />
          </section>
          <section id="contact">
            <Footer />
          </section>
        </main>
      )}
    </>
  );
}

"use client";

import CustomSection from "@/lib/ui/customSection";
// import style from "./index.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import Header from "@/lib/ui/heading";
import Box from "./Box/Box";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { line } from "motion/react-m";

const InfoCard = ({ src, heading, content }: any) => {
  return (
    <div id="our-approach">
      <div
        className="relative w-full h-48 mt-6 overflow-hidden rounded-2xl bg-white"
        style={{
          border: "2px solid var(--primary-color)",
        }}
      >
        <Image
          src={src}
          alt="Side Graphic Bottom Right"
          layout="fill"
          objectFit="cover"
          
        />
      </div>
      <div>
        <div className="flex justify-center font-amazingSlab text-2xl font-bold my-2">
          {heading}
        </div>
        <div className="whitespace-pre-wrap text-center max-w-72 font-amazingSlab text-base font-normal ">
          {content}
        </div>
      </div>
    </div>
  );
};

const infoCards = [
  {
    src: "/images/approach/Discovery.svg",
    heading: "Discovery",
    content:
      "We dive deep into understanding your hello brand essence, mission & vision.",
  },
  {
    src: "/images/approach/Strategy.svg",
    heading: "Strategy",
    content:
      "We craft bespoke strategies that position your brand as a market leader.",
  },
  {
    src: "/images/approach/Execution.svg",
    heading: "Execution",
    content:
      "We bring ideas to life with stunning visuals, compelling content & data-backed campaigns.",
  },
  {
    src: "/images/approach/Optimization.svg",
    heading: "Optimization",
    content:
      "We analyze, refine & elevate performance to ensure long-term success.",
  },
];

export default function OurApproach() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("our-approach");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight - 100 && rect.bottom > 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mainBox = document.querySelector('.mainbox');
    if (!mainBox) return;

    // Create sticky scroll trigger animation
    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.mainbox',
        start: 'top 14%',
        end: '+=2000',
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });

    // Animate the main box during scroll
    lineTl.to('.mainbox', {
      scale: `1 `,
      borderRadius: '20px',
      opacity: 0.9,
      ease: 'power1.inOut',
      duration: 1,
    }, 0);

    // Animate content inside
    lineTl.to('.mainbox-content', {
      y: 0,
      opacity: 1,
      ease: 'power1.inOut',
      duration: 1,
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <CustomSection sectionId="our-approach-side" className="mainbox">
      
      <Box/>
   
          <div
          id="our-approach"
          className="flex flex-wrap gap-8 justify-center px-10 py-4 space-4 lg:hidden"
          >
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              src={card.src}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
    </CustomSection>
  );
}

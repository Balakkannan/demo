"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
export default function Brands() {
  const [hoveredBrandIndex, setHoveredBrandIndex] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <section className="bg-[#0a0a0a] text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:mx-[3rem] lg:mx-[auto] mx-auto max-w-[913px] font-amazingSlab font-bold text-primary_text mb-4 xs:text-center md:text-center lg:text-center">
          Some of The Brands That Matter
        </h2>
        <p className="mb-8 mt-4 mx-auto md:mx-[3rem] lg:mx-[auto] max-w-[913px] text-lg xs:text-center md:text-center lg:text-center text-gray-300 font-amazingSlab">
          We&apos;re proud to have partnered with clients across all the
          industries. Delivering impactful results for startups, SMEs, and
          global enterprises. Our collaborative projects have spanned
        </p>
        <div className="flex flex-wrap gap-x-[80px] lg:gap-y-[80px] gap-y-[10px] justify-center">
          {brands.map((brand, index) => (
            <motion.div
              className="flex-[0_0_calc(21%-20px)] xs:flex-[0_0_calc(35%-20px)] flex justify-center items-center"
              onHoverStart={() => setHoveredBrandIndex(index)}
              onHoverEnd={() => setHoveredBrandIndex(null)}
              key={brand.title}
            >
              <div className="relative h-[90px] w-full">
                <Image
                  src={
                    isMobile ? brand.icon : (hoveredBrandIndex === index ? brand.icon : brand.iconshaded)
                  }
                  alt={brand.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const brands = [
  {
    title: "Arafah Group",
    iconshaded: "/images/SVG/ArafahGroupbw.svg",
    icon: "/images/SVG/Arafah Group.svg",
  },
  {
    title: "British Nursery",
    iconshaded: "/images/SVG/British Nursery bw.svg",
    icon: "/images/SVG/British Nursery.svg",
  },
  {
    title: "CFX",
    iconshaded: "/images/SVG/CFX bw.svg",
    icon: "/images/SVG/CFX.svg",
  },
  {
    title: "Cosmos",
    iconshaded: "/images/SVG/Cosmos bw.svg",
    icon: "/images/SVG/Cosmos.svg",
  },
  {
    title: "Fareen Azeez",
    iconshaded: "/images/SVG/Fareen Azeez bw.svg",
    icon: "/images/SVG/Fareen Azeez.svg",
  },
  {
    title: "Fusion mont",
    iconshaded: "/images/SVG/Fusion mont bw.svg",
    icon: "/images/SVG/Fusion mont.svg",
  },
  {
    title: "Jhanavi Traders",
    iconshaded: "/images/SVG/Jhanavi Traders bw.svg",
    icon: "/images/SVG/Jhanavi Traders.svg",
  },
  {
    title: "Justice Partner",
    iconshaded: "/images/SVG/Justice Partner bw.svg",
    icon: "/images/SVG/Justice Partner.svg",
  },
  {
    title: "Lakme ademy",
    iconshaded: "/images/SVG/Lakme ademy.svg",
    icon: "/images/SVG/Lakme ademy.svg",
  },
  {
    title: "Lakme salon",
    iconshaded: "/images/SVG/Lakme salon bw.svg",
    icon: "/images/SVG/Lakme salon.svg",
  },
  {
    title: "One world school",
    iconshaded: "/images/SVG/One world school bw.svg",
    icon: "/images/SVG/One world school.svg",
  },
  {
    title: "Quantum Algo",
    iconshaded: "/images/SVG/Quantum Algo bw.svg",
    icon: "/images/SVG/Quantum Algo.svg",
  },
  {
    title: "Sammprada",
    iconshaded: "/images/SVG/Sammprada bw.svg",
    icon: "/images/SVG/Sammprada.svg",
  },
  {
    title: "Samriddhi",
    iconshaded: "/images/SVG/Samriddhi bw.svg",
    icon: "/images/SVG/Samriddhi.svg",
  },
  {
    title: "Shobha",
    iconshaded: "/images/SVG/Shobha bw.svg",
    icon: "/images/SVG/Shobha.svg",
  },
  {
    title: "Silicon city",
    iconshaded: "/images/SVG/Silicon city bw.svg",
    icon: "/images/SVG/Silicon city.svg",
  },
  {
    title: "Sree vinayaka Graphics",
    iconshaded: "/images/SVG/Sree vinayaka Graphics bw.svg",
    icon: "/images/SVG/Sree vinayaka Graphics.svg",
  },
  {
    title: "Studione",
    iconshaded: "/images/SVG/Studione bw.svg",
    icon: "/images/SVG/Studione.svg",
  },
  {
    title: "The Zen Aura",
    iconshaded: "/images/SVG/The Zen Aura bw.svg",
    icon: "/images/SVG/The Zen Aura.svg",
  },
  {
    title: "Viva vertex",
    iconshaded: "/images/SVG/Viva vertex bw.svg",
    icon: "/images/SVG/Viva vertex.svg",
  },
  
];

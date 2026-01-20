"use client";
import React from "react";
import "./marquee.css";
import Marqueetag from "react-fast-marquee";
import Image from "next/image";
import useWindowSize from "@/lib/function/useWindowSize";

const baseImages = [
  "/images/marquee/Google.png",
  "/images/marquee/Adobe.png",
  "/images/marquee/Shopify.png",
  "/images/marquee/Linked.png",
  "/images/marquee/Meta.png",
  // "/Images/marquee/Klaviyo Partner.png",
  // "/Images/marquee/Amazon ads partner.png", /* if add image marquee.css update*/ 
];
const images = [...baseImages, ...baseImages, ...baseImages, ...baseImages,...baseImages];

const Marquee = () => {
    const { width } = useWindowSize();
  return (
    <div>
      <div>
          <Marqueetag  className="w-full h-[80px]  flex flex-col overflow-hidden  " gradient={false} speed={width >800 ? 100 : 80} >
            {images.map((src, index) => (
              <div  className=" flex flex-col gap-10 mx-[150px] xs:mx-[50px] sm:mx-[70px] md:mx-[100px] " key={src + index}>
                           <Image 
                             src={src}
                             alt={src}
                             width={width > 800 ? 160 : 100}
                             height={width > 800 ? 160 : 100}
                             className="xs:h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] w-auto object-contain"
                           />
              </div>
            ))}
          </Marqueetag>
      </div>
    </div>
  );
};

export default Marquee;

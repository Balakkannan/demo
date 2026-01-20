"use client";
import ImageRevolver from "@/lib/ui/animation/ImageRevolver";
import Marquee from "./Marquee/MarqueeImages";
import Space from "@/lib/ui/space";
import { motion } from "motion/react";
import { useState } from "react";

export default function InitialView() {
  return (
    <section className="w-[100%] h-auto ">
      <TopRightLogo />
      <BigText />
      <Space className="mb-20" />
      <Space className="mt-[8rem]" />
      <Marquee />
    </section>
  );
}

function TopRightLogo() {
  return (
    <ImageRevolver
      imageSrc="/images/logo.svg"
      text="SCROLL TO VIEW MORE  SRCOLL TO VIEW MORE  "
    />
  );
}

function BigText() {
  //states
  const [onTextHover, setOnTextHover] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({
      x: x > centerX ? -1 : 1,
      y: y > centerY ? -1 : 1,
    });
  };

  //animation
  const boxShadowWidth = 6;
  function Animation(width: number) {
    function shadow(xDir: number, yDir: number) {
      return `${width * xDir}px ${width * yDir}px black, ${
        (width + 3) * xDir
      }px ${(width + 3) * yDir}px var(--primary-color)`;
    }

    function transition() {
      return { duration: 0.4 };
    }

    return { shadow, transition };
  }

  const transition = Animation(boxShadowWidth).transition;
  const shadowFunc = Animation(boxShadowWidth).shadow;

  const variants = {
    big: {
      textShadow: shadowFunc(mousePos.x, mousePos.y),
      transition: transition(),
    },
    small: {
      textShadow: shadowFunc(
        mousePos.x,
        mousePos.y * Math.floor(boxShadowWidth / 2) / boxShadowWidth
      ),
      transition: transition(),
    },
  };

  //component
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover="big"
      transition={{ duration: 1, ease: "anticipate" }}
      onHoverStart={() => setOnTextHover(true)}
      onHoverEnd={() => setOnTextHover(false)}
      onMouseMove={handleMouseMove}
      className="relative text-white font-amazingSlab text-[50px] xs:text-[60px] sm:text-[100px] md:text-[120px] lg:text-[180px] 
      font-bold 
    flex justify-center items-center flex-col tracking-wide text-center"
    >
      <motion.div variants={variants} animate={onTextHover ? "big" : undefined}>
        {"HEIREACH".split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.div
          variants={variants}
          animate={onTextHover ? "small" : undefined}
          className="uppercase font-amazingSlab text-2xl md:text-[50px] 
        font-medium text-center -translate-y-6 w-full
       tracking-[1rem] md:tracking-[3rem] xl:tracking-[6rem]"
        >
          {"Media".split("").map((letter, index) => (
            <motion.span
              key={letter}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.4 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

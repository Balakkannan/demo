"use client";
import { motion } from "motion/react";

export default function OurWorks() {
  return (
    <section
      className="flex flex-col lg:flex-row 
    items-center font-amazingSlab lg:justify-center lg:gap-16 
    justify-between bg-[#0a0a0a] text-white px-6 lg:px-10 py-20 space-y-10 lg:space-y-0"
    >
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-6xl  md:text-4xl flex lg:gap-6 flex-col md:gap-4  xs:gap-3 font-bold leading-tight">
          We Exist Because <br />
          <span className="text-primary_text">The World Needs Us</span>
        </h1>
        <p className="mt-4 text-lg lg:text-3xl flex flex-col lg:gap-4 md:gap-2 xs:gap-2">
          A Creative Agency{" "}
          <span>
            {" "}
            That Drives <span className="font-rockwellNova">
              40+
            </span> Brands{" "}
          </span>
        </p>
        {/* <a
          href="#"
          className="mt-6 inline-flex  items-center lg:text-2xl text-primary_text hover:underline"
        >
          View All Works
          <span className="ml-2">
            <Image
              src={"/images/upper-right-arrow.svg"}
              alt="Right arrow"
              width={30}
              height={40}
              className="w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 lg:w-10 lg:h-12"
            ></Image>
          </span>
        </a> */}
      </div>

      {/* Right Globe */}
      <div className="flex justify-center items-center">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg relative ">
          <motion.div
            animate={{ x: ["0%", "0%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear", repeatType: "loop" }}
            style={{ willChange: "transform" }}
            className="absolute flex w-[200%] h-full "
          >
            {/* Each child must be exactly 50% width and positioned relative so Next/Image fill works */}
            <div className="w-1/2 h-full relative flex-shrink-0  bg-[#0a0a0a]">
              {/* <Image
                src="/images/World Gif_1.gif"
                alt="Globe"
              fill
                className="object-cover"
              /> */}
              <video src="/images/Globe Video 1080p.mp4" autoPlay muted loop  className="h-full w-full object-cover absolute top-0 left-0 "></video>
            </div>

            {/* <div aria-hidden="true" className="w-1/2 h-full relative flex-shrink-0 ">
              <Image
                src="/images/World with space.png"
                alt="Globe Duplicate"
               fill
                className="object-cover object-[40%-0%]"
              />
            </div>
             */}

          </motion.div>
        </div>
      </div>
    </section>
  );
}

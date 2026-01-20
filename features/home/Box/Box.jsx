"use client";
import React from 'react'
import Logo1 from "./Asstes/Rectangle1.svg"
import Logo2 from "./Asstes/Rectangle2.svg"
import "./Box.css"
import { useRef, useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { mask } from 'motion/react-m';
import Header from "@/lib/ui/heading";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
const Box = () => {
  // ? Box image animtion
  const boxRef = useRef([]);
  const linearrowRef = useRef([]);

  //? line and arrow mark

  const lineRef = ((el) => {
    if (el && !boxRef.current.includes(el)) {
      boxRef.current.push(el)
    }
  })

  const arrowRef = ((el) => {
    if (el && !linearrowRef.current.includes(el)) {
      linearrowRef.current.push(el)
    }
  })
   

  useEffect(() => {
 

    // ==========================================
    // ONE MASTER TIMELINE WITH SCROLLTRIGGER
    // ==========================================

const masterTl = gsap.timeline({
  scrollTrigger: {
  trigger: ".boxani",
  start: "top 28%",
  end: "+=1800",
  scrub: true,

}
});


    // Get all elements
    const boxElements = document.querySelectorAll('.animationgsap');
    const lineElements = boxRef.current;
    const arrowElements = linearrowRef.current;
     
    // ==========================================
    // BOX 1 - DISCOVERY (0s to 2.5s)
    // ==========================================
    masterTl.to(lineElements.slice(0, 2), {
      width: 600,
      duration: 2.5,
      stagger: 1,
      ease: 'power1.inOut',
    }, 3.5);

    masterTl.to(arrowElements.slice(0, 1), {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
    }, 4.5);

    masterTl.fromTo(
      Array.from(boxElements).slice(0, 3),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger:  {
      each: 1,
      from: "end",   // 🔥 reverse order
    },
        ease: 'power2.out',
      },
      8
    );

    // ==========================================
    // BOX 2 - STRATEGY (2.5s to 5s)
    // ==========================================
    masterTl.to(lineElements.slice(2, 5), {
      width: 600,
      duration: 4,
      stagger: 1.5,
      ease: 'power1.inOut',
    }, 11.5);

    masterTl.to(arrowElements.slice(1, 2), {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
    }, 14.8);

    masterTl.fromTo(
      Array.from(boxElements).slice(3, 6),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 5,
        stagger: 1,
        ease: 'power2.out',
      },
      16
    );

    // ==========================================
    // BOX 3 - EXECUTION (5s to 7.5s)
    // ==========================================
    masterTl.to(lineElements.slice(5, 8), {
      width: 600,
      duration:4,
      stagger: 1.7,
      ease: 'power1.inOut',
    }, 25);

    masterTl.to(arrowElements.slice(2, 3), {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
    }, 28.5);

    masterTl.fromTo(
      Array.from(boxElements).slice(6, 9),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 5,
        stagger:  {
      each: 1,
      from: "end",   // 🔥 reverse order
    },
        ease: 'power2.out',
      },
      30
    );

    // ==========================================
    // BOX 4 - OPTIMIZATION (7.5s to 10s)
    // ==========================================
    masterTl.to(lineElements.slice(8, 11), {
      width: 600,
      duration: 4,
      stagger: 1.8,
      ease: 'power1.inOut',
    }, 35.5);

    masterTl.to(arrowElements.slice(3, 4), {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
    }, 39.5);

    masterTl.fromTo(
      Array.from(boxElements).slice(9, 12),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 5,
        stagger: 1,
        ease: 'power2.out',
      },
      40.5
    );
         masterTl.to(lineElements.slice(11,12), {
      width: 600,
      duration: 4,
      stagger: 1,
      ease: 'power1.inOut',
    }, 45);
       masterTl.to(arrowElements.slice(4, 5), {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
    }, 48.5);
     masterTl.fromTo(
      Array.from(boxElements).slice(12, 13),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 5,
        stagger: 1,
        ease: 'power2.out',
      },
      50.5
    );
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    };
  }, []);
  
  return (
    <div>
     <div className="smooth-wrapper sm:hidden md:hidden xs:hidden lg:block">
    <div className="smooth-content">
      <div className='h-[100vh] w-[100%] boxani  flex justify-center items-center relative border '>
        <div className='h-[99vh] w-[80%]  relative overflow-hidden '>
        <Header name="Our approach" type="h2" className="text-center text-3xl" />
          <div className='h-[80%] w-[100%]  flex z-[1] border '>
            <div className='h-[100%] w-[25%]  flex items-center relative'>
              <section className='h-auto w-[100%] flex flex-col items-center absolute top-[20%] '>
                <img src="/images/Asstes/Discovery.svg" alt="" className='w-[94%] h-[140px] animationgsap' />
                <div>
                  <h4 className='text-[white] text-center text-[1.5rem] leading-[2rem] font-bold pt-[8px] pb-[8px] font-[AmazingSlab] animationgsap'>Discovery</h4>
                  <p className='text-[white] text-center text-[0.8rem] leading-[1.5rem] animationgsap'>We dive deep into understanding your brand essence, mission & vision.</p>
                </div>
              </section>
            </div>
            <div className='h-[100%] w-[25%]  flex items-center relative'>
              <section className='h-auto w-[100%] flex flex-col items-center absolute top-[28%] '>
                <div>
                  <h4 className='text-[white] text-center text-[1.5rem] leading-[2rem] font-bold pt-[8px] pb-[8px] font-[AmazingSlab] animationgsap'>Strategy</h4>
                  <p className='text-[white]  text-[0.8rem] leading-[1.5rem] text-center ps-5 pe-3 pb-4 animationgsap'>We craft bespoke strategies that position your brand as a market leader.</p>
                </div>
                <img src="/images/Asstes/Strategy.svg" alt="" className='w-[94%] h-[140px] animationgsap' />
              </section>
            </div>
            <div className='h-[100%] w-[25%]  flex items-center relative'>
              <section className='h-auto w-[100%] flex flex-col items-center absolute  top-[20%]'>
                <img src="/images/Asstes/Execution.svg" alt="" className='w-[94%] h-[140px] animationgsap' />
                <div>
                  <h4 className=' text-[white] text-center text-[1.5rem] leading-[2rem] font-bold pt-[8px] pb-[8px] font-[AmazingSlab] animationgsap'>Execution</h4>
                  <p className='text-[white] text-center text-[0.8rem] leading-[1.5rem] ps-2 pe-0 animationgsap'>We bring ideas to life with stunning visuals, compelling content & data-backed campaigns.</p>
                </div>
              </section>
            </div>
            <div className='h-[100%] w-[25%] flex items-center relative'>
              <section className='h-auto w-[100%] flex flex-col items-center absolute top-[28%]'>
                <div>
                  <h4 className='text-[white] text-center text-[1.5rem] leading-[2rem] font-bold pt-[8px] pb-[8px] font-[AmazingSlab] animationgsap'>Optimization</h4>
                  <p className='text-[white]  text-[0.8rem] leading-[1.5rem] text-center ps-3 pb-4 animationgsap'>We analyze, refine & elevate performance to ensure long-term success.</p>
                </div>
                <img src="/images/Asstes/Optimization.svg" alt="" className='w-[94%] h-[140px] animationgsap' />
              </section>

            </div>
          </div>
          {/* Line and arrow */}
          <div className='h-[140px] w-[25%] absolute bottom-16 '>
            <div className="line-container">
              <div className="dotted-line" ref={lineRef} data-speed="0"></div>
              {/* <div className="arrow" ref={arrowRef}></div> */}

            </div>
            <div className="line-container_1">
              <div className="dotted-line" ref={lineRef}data-speed="1"></div>
              <div className="arrow" ref={arrowRef}></div>
            </div>
          </div>
          {/* top line */}
          <div className='h-[150px] w-[50%] absolute top-10 left-0 '>
            <div className="line-container_2">
              <div className="dotted-line" ref={lineRef} data-speed="-4"></div>
            </div>
            <div className="line-container_3 ">
              <div className="dotted-line" ref={lineRef}></div>
              <div className="line-container_4 ">
                <div className="dotted-line" ref={lineRef}></div>
                <div className="arrow" ref={arrowRef}></div>
              </div>
            </div>
          </div>
          {/* Thirdbox line */}
          <div className='h-[150px] w-[50%] absolute bottom-16 left-[25%] '>
            <div className="line-container_5">
              <div className="dotted-line" ref={lineRef}></div>
            </div>
            <div className="line-container_6 ">
              <div className="dotted-line" ref={lineRef}></div>
            </div>
            <div className="line-container_7 ">
              <div className="dotted-line" ref={lineRef}></div>
              <div className="arrow" ref={arrowRef}></div>
            </div>

          </div>
          {/* 4th line */}
          <div className='h-[150px] w-[50%] absolute top-10 left-[50%]  '>
            <div className="line-container_2">
              <div className="dotted-line" ref={lineRef}></div>
            </div>
            <div className="line-container_3 ">
              <div className="dotted-line" ref={lineRef}></div>
              <div className="line-container_4 ">
                <div className="dotted-line" ref={lineRef}></div>
                <div className="arrow" ref={arrowRef}></div>
              </div>
            </div>
          </div>
          {/* 5th Line */}
          <div className='h-[150px] w-[50%] absolute bottom-16 left-[75%]  '>
            <div className="line-container_9 w-[50px] top-[50px] left-[22.8%] ">
              <div className="dotted-line" ref={lineRef}></div>
              <div className="arrow" ref={arrowRef}></div>
            </div>
              <img src="/images/Asstes/Heireachmedialogo.svg" alt="" className='h-16 w-[auto] absolute top-[64px] left-[18%] animationgsap' />

          </div>
        </div>

      </div>

    </div>
    </div>
    </div>
  )
}

export default Box

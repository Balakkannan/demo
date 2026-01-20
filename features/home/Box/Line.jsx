import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const DottedLineWithArrow = () => {
  const lineRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate line growing
    tl.to(lineRef.current, {
      width: 600,
      duration: 1, 
      ease: "linear",
    });

    // Reveal arrow after line completes
    tl.to(
      arrowRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.2" // overlap slightly for smoother effect
    );
  }, []);

  return (
    <div className="line-container">
      <div className="dotted-line" ref={lineRef}></div>
      <div className="arrow" ref={arrowRef}></div>

      <style>{`
        body {
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .line-container {
          position: relative;
          width: 600px;
          height: 20px;
          display: flex;
          align-items: center;
        }

        .dotted-line {
          height: 2px;
          width: 0; /* start from 0 */
          background-image: repeating-linear-gradient(
            to right,
            white 0px,
            white 4px,
            transparent 4px,
            transparent 8px
          );
        }

        .arrow {
          position: absolute;
          right: 0;
          width: 0;
          height: 0;
          border-left: 10px solid white; /* arrow head */
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          opacity: 0; /* hidden initially */
        }
      `}</style>
    </div>
  );
};

export default DottedLineWithArrow;
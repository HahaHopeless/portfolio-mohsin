import "./styles.css";
import React, { useState, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ScrollUp from "../../components/ScrollUp";
import Intro1 from "../../components/Intro1";
import Intro2 from "../../components/Intro2";
import Intro3 from "../../components/Intro3";

const Landing = ({ deviceType }) => {
  const fadeInOut = () => {
    setTimeout(() => {
      return "fade-out";
    }, 200);
  };
  
  // Create a ref to store the GSAP context
  const [ctx] = useState(() => gsap.context(() => {}));

  // Use useLayoutEffect to ensure DOM manipulation happens before browser paint
  useLayoutEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger to recalculate all positions and states
    ScrollTrigger.refresh(true);
    
    // Scroll to top of page
    window.scroll(0, 0);
    
    // Return cleanup function
    return () => {
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(t => t.kill());
      
      // Kill all GSAP animations
      ctx.revert(); // This will kill all GSAP animations created by this context
    };
  }, [ctx]);

  return (
    <>
      <ScrollUp
        className={`fade-in ${fadeInOut}`}
        animeClass={`fade-in ${fadeInOut}`}
      />
      <Intro1 deviceType={deviceType} />
      <div style={{ width: "100%", height: "20vh", background: "white" }}></div>
      <Intro2 deviceType={deviceType} />
      <div style={{ width: "100%", height: "30vh", background: "white" }}></div>
      <Intro3 deviceType={deviceType} />
    </>
  );
};

export default Landing;

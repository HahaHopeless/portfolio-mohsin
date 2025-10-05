import "./styles.css";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ScrollUp from "../../components/ScrollUp";
import Intro1 from "../../components/Intro1";
import Intro2 from "../../components/Intro2";
import Intro3 from "../../components/Intro3";

const Landing = () => {
  const fadeInOut = () => {
    setTimeout(() => {
      return "fade-out";
    }, 200);
  };

  const [deviceType, setDeviceType] = useState("");
  
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

  useEffect(() => {
    function handleResize() {
      // Determine device type based on window width
      if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
        setDeviceType("laptop");
      } else if (window.innerWidth >= 481 && window.innerWidth <= 768) {
        setDeviceType("tablet");
      } else if (window.innerWidth >= 320 && window.innerWidth <= 480) {
        setDeviceType("mobile");
      } else if (window.innerWidth >= 1025) {
        setDeviceType("desktop");
      }
    }
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

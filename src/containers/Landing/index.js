import "./styles.css";
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  useEffect(() => {
    ScrollTrigger.refresh();
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);

      if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
        console.log("Laptop Screen");
        setDeviceType("laptop");
      } else if (window.innerWidth >= 481 && window.innerWidth <= 768) {
        console.log("Tablet Screen");
        setDeviceType("tablet");
      } else if (window.innerWidth >= 320 && window.innerWidth <= 480) {
        console.log("Mobile Screen");
        setDeviceType("mobile");
      } else if (window.innerWidth >= 1025) {
        console.log("Desktop Screen");
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

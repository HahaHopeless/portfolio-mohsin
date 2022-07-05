import "./styles.css";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollUp from "../../components/ScrollUp";
import Intro1 from "../../components/Intro1";
import Intro2 from "../../components/Intro2";
import Intro3 from "../../components/Intro3";
import gsap from "gsap";

const Landing = () => {
  const fadeInOut = () => {
    setTimeout(() => {
      return "fade-out";
    }, 200);
  };

  useEffect(() => {
    ScrollTrigger.refresh();
    window.scroll(0, 0);
    // window.scrollTo({
    //   top: 0,
    // });
  }, []);

  return (
    <>
      <ScrollUp
        className={`fade-in ${fadeInOut}`}
        animeClass={`fade-in ${fadeInOut}`}
      />
      <Intro1 />
      <div style={{ width: "100%", height: "20vh", background: "white" }}></div>
      <Intro2 />
      <div style={{ width: "100%", height: "30vh", background: "white" }}></div>
      <Intro3 />
    </>
  );
};

export default Landing;

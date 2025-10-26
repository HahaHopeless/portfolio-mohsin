import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./styles.css";
import { FormattedMessage } from "react-intl";

export default function Intro3({ deviceType }) {
  // var swiper = new Swiper(".swiper-container", {
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Create separate animations for each element
      gsap.fromTo(
        ".tech",
        {
          transform: "translateX(-120vw)",
        },
        {
          transform: "translateX(0)",
          scrollTrigger: {
            trigger: ".intro-3",
            toggleActions: "play none none reverse",
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".stack",
        { transform: "translateX(-120vw)" },
        {
          transform: "translateX(0)",
          scrollTrigger: {
            trigger: ".intro-3",
            toggleActions: "play none none reverse",
            start: "top 60%",
            end: "center center",
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(
        ".cards-stack",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".intro-3",
            toggleActions: "play none none reverse",
            start: "top 70%",
            end: "center center",
            scrub: 2,
          },
        }
      );

      gsap.fromTo(
        ".stack-bg",
        { opacity: 0 },
        {
          opacity: 0.2,
          scrollTrigger: {
            trigger: ".intro-3",
            toggleActions: "play none none reverse",
            start: "top 50%",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();
    }, 100);

    //ScrollTrigger broke react-router. Below is a fix for it.
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      gsap.killTweensOf(window);
    };
  }, []);

  return (
    <div
      className='container-fluid row d-flex intro-3'
      style={{ padding: "30px" }}
    >
      <div className='stack-bg'></div>
      <div
        className={`col-md-6 ${
          deviceType === "mobile" && "intro-3-mobile-title"
        }`}
        style={{ marginTop: "15vh" }}
      >
        {/* <h1
          style={{
            fontSize: "14vw",
            fontWeight: "900",
            marginBottom: "-6.5vw",
          }}
          className='my'
        >
          MY
        </h1> */}
        <h1
          style={{
            fontSize: "14vw",
            fontWeight: "900",
            marginBottom: "-6.5vw",
          }}
          className='tech gradientText blue '
        >
          {" "}
          TECH
        </h1>
        <h1 style={{ fontSize: "14vw", fontWeight: "900" }} className='stack'>
          STACK
        </h1>
      </div>
      <div className={`col-md-6 cards-stack`} style={{ textAlign: "center" }}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={`mySwiper ${deviceType === "mobile" && "mobile-swiper"}`}
          spaceBetween={35}
        >
          <SwiperSlide>
            <img
              src={require("../../assets/icons/html5.svg")}
              style={{
                width: "290px",
                height: "320px",
                objectFit: "contain",
              }}
              alt="HTML5 logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/css3.svg")}
              style={{
                width: "290px",
                height: "320px",
                objectFit: "contain",
              }}
              alt="CSS3 logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/js.svg")}
              style={{
                width: "400px",
                height: "320px",
                objectFit: "contain",
              }}
              alt="JavaScript logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/react.svg")}
              style={{
                width: "250px",
                height: "320px",
                objectFit: "contain",
              }}
              alt="React logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/nodejs.svg")}
              style={{
                width: "250px",
                height: "320px",
                objectFit: "contain",
              }}
              alt="Node.js logo"
            />
          </SwiperSlide>
          {/* <SwiperSlide>Mongo DB</SwiperSlide>
        <SwiperSlide>MySQL</SwiperSlide> */}
        </Swiper>

        <h3
          style={{ alignSelf: "flex-end", fontSize: "40px" }}
          className='swipe-hand'
        >
          👆​
        </h3>
        <p className='swipe-desc'>
          <FormattedMessage id='swipe' />
        </p>
      </div>
    </div>
  );
}

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { SwiperSlide } from "swiper/react/swiper-slide";
import { Swiper } from "swiper/react/swiper";
import { EffectCards } from "swiper";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";

import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/modules/effect-cards/effect-cards.min.css";
import "./styles.css";
import { FormattedMessage } from "react-intl";

export default function Intro3() {
  // var swiper = new Swiper(".swiper-container", {
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var t1 = new Timeline();

    t1.fromTo(
      ".tech",
      {
        transform: "translateX(-120vw)",
      },
      {
        transform: "translateX(0)",
        scrollTrigger: {
          trigger: ".tech",
          toggleActions: "play none none none",
          start: "top center",
          end: "+=100%",
          scrub: 1,
        },
        markers: true,
      }
    )
      .fromTo(
        ".stack",
        { transform: "translateX(-120vw)" },
        {
          transform: "translateX(0)",
          scrollTrigger: {
            trigger: ".stack",
            toggleActions: "play none none none",
            start: "center center",
            end: "+=100%",
            scrub: 2,
          },
          markers: true,
        }
      )
      .fromTo(
        ".cards-stack",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".stack",
            toggleActions: "play none none none",
            start: "center center",
            end: "+=90%",
            scrub: 3,
          },
          markers: true,
        }
      )
      .fromTo(
        ".stack-bg",
        { opacity: 0 },
        {
          opacity: 0.2,
          scrollTrigger: {
            trigger: ".stack-bg",
            toggleActions: "play none none none",
            start: "+=180%",
            end: "+=190%",
            scrub: 1,
          },
          markers: true,
        }
      );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".intro-3",
        pin: ".intro-3",
        start: "center center",
        end: "+=1900",
        // scrub: 1,
        // markers: true,
      },
    });

    //ScrollTrigger broke react-router. Below is a fix for it.
    return () => {
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
      <div className='col-md-6' style={{ marginTop: "15vh" }}>
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
      <div className='col-md-6 cards-stack' style={{ textAlign: "center" }}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className='mySwiper'
          spaceBetween={35}
        >
          <SwiperSlide>
            <img
              src={require("../../assets/icons/html5.svg")}
              style={{ width: "290px", height: "320px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/css3.svg")}
              style={{ width: "290px", height: "320px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/js.svg")}
              style={{ width: "400px", height: "320px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/react.svg")}
              style={{ width: "250px", height: "320px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/nodejs.svg")}
              style={{ width: "250px", height: "320px", objectFit: "contain" }}
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

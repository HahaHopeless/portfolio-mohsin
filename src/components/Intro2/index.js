import "./styles.css";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/services.json";
import { Timeline } from "gsap/gsap-core";

import dotGrid from "../../assets/images/dotGrid2.svg";

const Intro2 = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var t1 = new Timeline();
    // var t2 = new Timeline();
    // var t3 = new Timeline();
    // var t4 = new Timeline();
    // var t5 = new Timeline();

    t1.fromTo(
      ".iMake",
      {
        opacity: 0,
        translateX: "translate(80px, 75px) rotate(20deg) skew(20deg, 0deg)",
      },
      {
        opacity: 1,
        translateX: "translate(130px, 90px) rotate(20deg) skew(20deg, 0deg)",
        scrollTrigger: {
          // trigger: ".iMake",
          trigger: ".hero2",
          toggleActions: "play none none reverse",
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        },
      }
    )
      .fromTo(
        ".appsAnd",
        { width: 0 },
        {
          width: "100%",
          scrollTrigger: {
            // trigger: ".appsAnd",
            trigger: ".hero2",
            toggleActions: "play none none none",
            start: "center center",
            end: "+=150%",
            scrub: 1,
          },
        }
      )
      .fromTo(
        ".websites",
        { rotationX: -90 },
        {
          rotationX: 0,
          scrollTrigger: {
            // trigger: ".websites",
            trigger: ".hero2",
            toggleActions: "play none none none",
            start: "top -50%",
            end: "+=60%",
            scrub: 1,
          },
        }
      )
      .fromTo(
        ".apps",
        {
          backgroundColor: "#25435d",
          textShadow: "2px 4px 4px rgba(255, 255, 255, 0)",
        },
        {
          backgroundColor: "rgb(0, 104, 255)",
          textShadow: "0px 0px 5px rgba(0, 104, 254, 0.8)",
          // "2px 4px 4px rgba(255, 255, 255, 0.15), 0px 0px 5px rgba(0, 104, 254, 0.8)",
          scrollTrigger: {
            // trigger: ".apps",
            trigger: ".hero2",
            toggleActions: "play none none none",
            start: "top -100%",
            end: "+=100%",
            scrub: 1,
          },
        }
      )
      .fromTo(
        ".websites",
        {
          backgroundColor: "#25435d",
          textShadow: "2px 4px 4px rgba(255, 255, 255, 0)",
        },
        {
          backgroundColor: "rgb(0, 104, 255)",
          textShadow: "0px 0px 5px rgba(0, 104, 254, 0.8)",
          // "2px 4px 4px rgba(255, 255, 255, 0.15), 0px 0px 5px rgba(0, 104, 254, 0.8)",
          scrollTrigger: {
            // trigger: ".websites",
            trigger: ".hero2",
            toggleActions: "play none none none",
            start: "top -100%",
            end: "+=100%",
            scrub: 1,
          },
          markers: true,
        }
      )
      .fromTo(
        ".dot-grid-intro-2",
        {
          transform: "scale(2)",
          opacity: 0,
        },
        {
          transform: "scale(6)",
          opacity: 0.08,
          marginTop: "100px",
          marginRight: "100px",
          scrollTrigger: {
            trigger: ".hero2",
            toggleActions: "play none none none",
            start: "top -100%",
            end: "+=100%",
            scrub: 1,
          },
          markers: true,
        }
      );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero2",
        pin: ".hero2",
        start: "center center",
        end: "+=1800",
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

  // const interactivity = {
  //   mode: "scroll",
  //   actions: [
  //     {
  //       visibility: [0.45, 1.0],
  //       type: "loop",
  //       frames: [22, 110],
  //     },
  //   ],
  // };

  return (
    <section
      style={{ height: "100vh" }}
      className='hero2 vw-100 d-flex flex-column align-items-center justify-content-center overflow-hidden'
    >
      {/* <Lottie
        isStopped={false}
        style={{
          userSelect: "none",
          cursor: "default",
          position: "absolute",
          top: "10vh",
          right: 0,
          zIndex: 1,
          width: 300,
          height: 300,
        }}
        animationData={abstract}
        // interactivity={interactivity}
      /> */}
      <img
        src={dotGrid}
        className='dot-grid-intro-2'
        title='This photo was taken and edited on a cheap Android phone'
      />

      <div className='container-fluid row '>
        <div className='col-md-4 d-flex align-items-start animation'>
          <Lottie
            isStopped={false}
            style={{
              zIndex: 99,
              userSelect: "none",
              cursor: "default",
              width: 400,
              height: 500,
            }}
            animationData={animationData}
          />
        </div>
        <div
          className='col-md-7 d-flex justify-content-center  flex-column'
          style={{
            marginLeft: "5vw",
            display: "inline-block",
            zIndex: 999,
          }}
        >
          <h1
            className='iMake'
            style={{
              fontWeight: "800",
              fontSize: "4vw",
              // textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              userSelect: "none",
              // marginBottom: "-3vw",
            }}
          >
            <FormattedMessage id='iMake' />
          </h1>
          {/* <h1 style={{ marginBottom: "-4.5vw" }}> */}
          <span
            className='appsAnd'
            style={{
              fontWeight: "900",
              fontSize: "10.5vw",
              // textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              marginLeft: "-0.35vw",
              userSelect: "none",
              // textOverflow: "clip",
              overflow: "hidden",
              marginBottom: "-5vw",
              whiteSpace: "nowrap",
              display: "inline-block",
              transform: "skew(-60deg,20deg) scaleY(0.6) translate(70px, 0px)",
            }}
          >
            <span className='apps'>APPS </span>

            <span
              className='and'
              style={{
                fontWeight: "400",
                fontSize: "8vw",
                // textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                marginLeft: "-0.35vw",
                userSelect: "none",
                display: "inline-block",
              }}
            >
              {`  &`}
            </span>
          </span>

          {/* </h1> */}
          <h1
            className='websites'
            style={{
              fontWeight: "900",
              fontSize: "10.5vw",
              // textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              userSelect: "none",
              transformOrigin: "bottom",
              transform: "skew(0deg, 21deg)",
            }}
          >
            WEBSITES
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro2;

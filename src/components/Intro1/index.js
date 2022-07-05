import "./styles.css";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
// import Lottie from "react-lottie";
import Lottie from "lottie-react";
import useMightyMouse from "react-hook-mighty-mouse";
// import animationData from "../../assets/animations/dev2.json";
import animationData from "../../assets/animations/developer.json";
import { Timeline } from "gsap/gsap-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";
import dpImage from "../../assets/images/dp.png";

const Intro1 = (props) => {
  const handleDownload = () => {
    //Use the commented part only when you get the CONTENT of the file instead of the whole file...
    // let blob = new Blob([require("../../assets/documents/CV.docx")], {
    //   type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document'",
    // });
    saveAs(
      require("../../assets/documents/resume.pdf"),
      "CV - Mohsin Kamal Akbar.pdf"
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var t1 = new Timeline();
    // var t2 = new Timeline();
    // var t3 = new Timeline();
    // var t4 = new Timeline();
    // var t5 = new Timeline();

    t1.fromTo(
      ".dp",
      { opacity: 0, translateY: -100 },
      {
        opacity: 1,
        translateY: 0,
        overflow: "hidden",
        scrollTrigger: {
          trigger: ".dp",
          toggleActions: "play none none none",
          start: "center center",
          end: "bottom ",
          scrub: 2,
        },
      }
    )
      .fromTo(
        ".hiIm",
        { opacity: 0, translateX: -30 },
        {
          opacity: 1,
          translateX: 10,
          scrollTrigger: {
            trigger: ".hiIm",
            toggleActions: "play none none none",
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
          },
        }
      )
      .fromTo(
        ".mohsin",
        { scale: 2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".mohsin",
            toggleActions: "play none none none",
            start: "center center",
            end: "bottom top",
            scrub: 1,
            // onLeave: () => {},
            // onEnterBack: () => {},
          },
        }
      )
      .fromTo(
        ".kamalakbar",
        { translateY: 200, opacity: 0 },
        {
          translateY: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".kamalakbar",
            toggleActions: "play none none none",
            start: "top -5%",
            end: "bottom center",
            scrub: 1,
          },
        }
      )
      .fromTo(
        ".imADeveloper",
        { transform: "scaleY(0)" },
        {
          transform: "scaleY(1)",
          scrollTrigger: {
            trigger: ".imADeveloper",
            toggleActions: "play none none none",
            start: "top -5%",
            end: "bottom center",
            scrub: 1,
          },
        }
      )
      .fromTo(
        ".btn-hover",
        { width: 0 },
        {
          width: 150,
          scrollTrigger: {
            trigger: ".btn-hover",
            toggleActions: "play none none none",
            start: "top -80%",
            end: "bottom center",
            scrub: 0.2,
            ease: "bounce",
          },
        }
      )
      .fromTo(
        ".line",
        {
          // height: "0vh",
          transform: "translate3d(1000px, -1000px, 0px) rotate(45deg)",
        },
        {
          // height: "200vh",
          transform: "translate3d(0px, 0px, 0px) rotate(45deg)",
          scrollTrigger: {
            trigger: ".line",
            toggleActions: "play none none none",
            start: "+=120%",
            end: "+=125%",
            scrub: 1,
            ease: "bounce",
          },
        }
      )
      .to(".hero", {
        scrollTrigger: {
          trigger: ".hero",
          pin: ".hero",
          start: "center center",
          end: "+=1800",
          ease: "ease-in",
          // scrub: true,
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
  //       visibility: [0, 0.2],
  //       type: "stop",
  //       frames: [10],
  //     },
  //     {
  //       visibility: [0.2, 0.45],
  //       type: "seek",
  //       frames: [10, 22],
  //     },
  //     {
  //       visibility: [0.45, 1.0],
  //       type: "loop",
  //       frames: [22, 110],
  //     },
  //   ],
  // };

  const style = {
    height: "360px",
    width: "100%",
    marginTop: "10vh",
    userSelect: "none",
    objectFit: "contain",
  };

  // const {
  //   selectedElement: {
  //     position: { angle: angleLeftEye },
  //   },
  // } = useMightyMouse(true, "left-eye", { x: 20, y: 20 });
  // const {
  //   selectedElement: {
  //     position: { angle: angleRightEye },
  //   },
  // } = useMightyMouse(true, "right-eye", { x: 20, y: 20 });

  // const rotateLeftEye = `rotate(${-angleLeftEye}deg)`;
  // const rotateRightEye = `rotate(${-angleRightEye}deg)`;

  return (
    <div
      style={{ height: "100vh" }}
      className='hero vw-100 d-flex flex-column align-items-center justify-content-center overflow-hidden'
    >
      <div
        className='line'
        style={{
          width: "50vw",
          height: "203vh",
          marginTop: "90vh",
          right: "-5vh",
          backgroundColor: "rgb(0, 104, 250)",
          position: "absolute",
          // transform: "rotate(45deg)",
        }}
      ></div>
      <div className='container-fluid row '>
        <div className='col-md-7'>
          <div style={{ textJustify: "inter-word", textAlign: "left" }}>
            <h1
              className='hiIm'
              style={{
                fontWeight: "800",
                fontSize: "4vw",
                // textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                userSelect: "none",
                marginBottom: "-3vh",
              }}
            >
              <FormattedMessage id='helloIm' />
            </h1>
            <h1 className='mohsin gradientText blue'>Mohsin</h1>
            <h1
              className='kamalakbar gradientText black'
              style={{
                fontSize: "8vw",
                marginLeft: "0.08vw",
              }}
            >
              Kamal Akbar
            </h1>

            <h6
              style={{
                marginLeft: "0.4vw",
                fontWeight: "bold",
                opacity: 0.4,
              }}
              className='imADeveloper'
            >
              <FormattedMessage id='imADeveloper' />
            </h6>

            <div
              className='btn-hover blue d-flex justify-content-center align-items-center'
              onClick={() =>
                window.open(
                  require("../../assets/documents/resume.pdf"),
                  "_blank"
                )
              }
            >
              <div style={{ minWidth: "150px" }}>
                <FontAwesomeIcon
                  icon={faFileDownload}
                  className='downloadIcon'
                  opacity={0.4}
                />
                <span style={{ userSelect: "none", color: "white" }}>
                  <FormattedMessage id='downloadCV' />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-5 d-flex align-items-start animation dp'>
          {/* <Lottie
            animationData={animationData}
            // interactivity={interactivity}
            style={style}
            isStopped={false}
          /> */}

          <img src={dpImage} style={style} />

          {/* <div className='eyes-follow'>
            <div className='eyes'>
              <div
                id='left-eye'
                className='eye'
                style={{ transform: rotateLeftEye }}
              >
                <div className='pupil' />
              </div>
              <div
                id='right-eye'
                className='eye'
                style={{ transform: rotateRightEye }}
              >
                <div className='pupil' />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro1;

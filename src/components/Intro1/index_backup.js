import "./styles.css";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/developer.json";
import { Timeline } from "gsap/gsap-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";

const Intro1 = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

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
    var t2 = new Timeline();
    var t3 = new Timeline();
    var t4 = new Timeline();

    t1.fromTo(
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
    );
    t2.fromTo(
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
          onLeave: () => {},
          onEnterBack: () => {},
        },
      }
    );
    t3.fromTo(
      ".kamalakbar",
      { translateY: 500, opacity: 0 },
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
    );
    t4.fromTo(
      ".download",
      { rotationX: -90 },
      {
        rotationX: 0,
        scrollTrigger: {
          trigger: ".download",
          toggleActions: "play none none none",
          start: "top -80%",
          end: "bottom center",
          scrub: 0.2,
          ease: "ease-in",
        },
      }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        pin: true,
        start: "center 60%",
        end: "+=1500",
        // scrub: true,
      },
    });
  }, []);

  return (
    <div
      style={{ height: "100vh" }}
      className='hero vw-100 d-flex flex-column align-items-center justify-content-center overflow-hidden'
    >
      <div className='container-fluid row '>
        <div className='col-md-7'>
          <div style={{ textJustify: "inter-word", textAlign: "left" }}>
            <h1
              className='hiIm'
              style={{
                fontWeight: "800",
                fontSize: "4vw",
                textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                userSelect: "none",
              }}
            >
              <FormattedMessage id='helloIm' />
            </h1>
            <h1
              className='mohsin'
              style={{
                fontWeight: "800",
                fontSize: "14vw",
                marginBottom: "-5vw",
                textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                marginLeft: "-0.35vw",
                userSelect: "none",
              }}
            >
              Mohsin
            </h1>
            <h1
              className='kamalakbar'
              style={{
                fontWeight: "800",
                fontSize: "8vw",
                textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                userSelect: "none",
              }}
            >
              Kamal Akbar
            </h1>
            <br></br>
            <div className='download' onClick={handleDownload}>
              <FontAwesomeIcon
                icon={faFileDownload}
                opacity={0.4}
                style={{
                  fontSize: "20px",
                  marginRight: "8px",
                }}
              />
              {"      "}
              Download CV
            </div>
          </div>
        </div>

        <div className='col-md-5 d-flex align-items-start animation'>
          <Lottie
            options={defaultOptions}
            height={500}
            width={400}
            isStopped={false}
            style={{
              marginTop: "-10vh",
              zIndex: 99,
              userSelect: "none",
              cursor: "default",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro1;

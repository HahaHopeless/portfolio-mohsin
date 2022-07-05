import "./styles.css";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Card from "../../components/Card";

const Projects = () => {
  useEffect(() => {
    window.scroll(0, 0);

    VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
      max: 15,
      reverse: true,
      speed: 500,
      gyroscope: false,
    });
  }, []);
  return (
    <section
      className='d-flex flex-column justify-content-center align-items-center min-vh-100'
      style={{ marginTop: "15vh" }}
    >
      <Card
        title='Breaking Bingo'
        goToUrl='https://breakingbingo.netlify.app'
        bgImage={"breakingBingo.webp"}
      />
      <Card
        // title='Tr@$h T@lk'
        comingSoon={true}
        bgImage={"trashTalk.webp"}
      />
    </section>
  );
};

export default Projects;

import React from "react";
import SVG from "./SVG";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Me from "./images/mee-main.png";
import "./AboutMe.css";
import SiteNavbar from "./SiteNavbar";
import MyResume from "./MyResume.pdf";
import { faGrinBeamSweat } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe() {
  return (
    <div className="about-me-container" data-testid="about-me">
      <SVG
        numOfCircles={500}
        distanceBetween={17}
        charge={60}
        withForce={false}
      />
      <img src={Me} alt="pic-of-me" className="pic-of-me"></img>
      <Card className="about-me-card" style={{ backgroundColor: "white" }}>
        <CardBody>
          <CardTitle>
            <h1 className="header">Hey, I'm Harry!</h1>
          </CardTitle>
          <CardText>
            I’m a software engineer based out of beautifully foggy San
            Francisco. I'm passionate about all things nutrition and health,
            playful user experiences, soft pastels and turning crosswalks into
            catwalks. When not coding, I run a{" "}
            <a
              href="https://www.theharrybanana.com/"
              className="harryb-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              small food business
            </a>{" "}
            on weekends selling healthy vegan sweets. I dream of the day I am
            able to open my own perfectly pastel pink storefront.
            <a
              href={MyResume}
              className="resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my resume! <FontAwesomeIcon icon={faGrinBeamSweat} />
            </a>
          </CardText>
        </CardBody>
      </Card>
      <SiteNavbar stylingClass="navbar-about-me" selected="about" />
    </div>
  );
}

export default AboutMe;

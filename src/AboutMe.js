import React from "react";
import SVG from "./SVG";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Me from "./images/mee-main.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div>
      {/* <SVG
        numOfCircles={500}
        distanceBetween={17}
        charge={60}
        withForce={false}
      /> */}
      <img src={Me} alt="pic-of-me" className="pic-of-me"></img>
      <Card className="about-me-card" style={{ backgroundColor: "#CBAACB" }}>
        <CardBody>
          <CardTitle>
            <h1 className="my-name">
              <b>h</b>arry <b>a</b>ustryn <b>t</b>eplow
            </h1>
          </CardTitle>
          <CardText>
            <b>hey!</b> I’m a software engineer based out of beautifully foggy
            San Francisco. I'm passionate about all things nutrition/health,
            playful user experiences, tasteful memes and soft pastels. Speaking
            of, check out this{" "}
            <a
              href="https://www.theharrybanana.com/"
              className="harryb-link"
              target="_blank"
            >
              small food business
            </a>{" "}
            I started as a side passion-project that I operate on weekends
            selling healthy vegan sweets. I dream of the day I am able to open
            my own perfectly pastel pink storefront.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default AboutMe;

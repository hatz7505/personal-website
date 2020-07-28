import React from "react";
import SVG from "./SVG";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Me from "./images/mee-main.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div>
      <SVG
        numOfCircles={500}
        distanceBetween={17}
        charge={60}
        withForce={false}
      />
      <img src={Me} alt="pic-of-me" className="pic-of-me"></img>
      <Card className="about-me-card" style={{ backgroundColor: "#CBAACB" }}>
        <CardBody>
          <CardTitle>
            <h1 className="my-name">
              <b>h</b>arry <b>a</b>ustryn <b>t</b>eplow
            </h1>
          </CardTitle>
          <CardText>
            <b>hi there!</b> I’m a software engineer based out of beautiful San
            Francisco. My professional career has grown from a full time
            restaurant server to an Operations Manager at a food tech startup,
            and today I’m excited and grateful for my journey in engineering. I
            love to create and consider myself a problem solver and I like to
            approach coding with this same creativity and diligence. Outside of
            work, I love to cook and am most passionate about all things
            nutrition. I even started my own{" "}
            <a
              href="https://www.theharrybanana.com/"
              className="harryb-link"
              target="_blank"
            >
              small food business
            </a>{" "}
            as a side passion-project that I operate on weekends selling healthy
            vegan sweets. I dream of the day I am able to open my own perfectly
            pastel pink storefront.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default AboutMe;

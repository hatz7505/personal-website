import React from "react";
import SVG from "./SVG";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import connectPic from "./images/connect_pic.png";
import "./Connect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import SiteNavbar from "./SiteNavbar";

function AboutMe() {
  return (
    <div className="connect-container">
      <SVG
        numOfCircles={500}
        distanceBetween={17}
        charge={60}
        withForce={false}
      />
      <img src={connectPic} alt="pic-of-me" className="connect-pic"></img>
      <Card
        className="connect-with-me-card"
        style={{ backgroundColor: "white" }}
      >
        <CardBody>
          <CardTitle>
            <h1 className="header">Connect with me!</h1>
          </CardTitle>
          <CardText className="contact">
            I always love connecting with new people, feel free to shoot me an
            email or find me on LinkedIn!
            <br></br>
            <a className="email" href="mailto:harryteplow@gmail.com">
              <FontAwesomeIcon className="icon-div" icon={faEnvelope} /> Email
              me{" "}
            </a>{" "}
            <br></br>
            <a
              className="linkedinLink"
              href="https://www.linkedin.com/in/harry-teplow-4a3b341b0/"
              target="_blank"
            >
              <FontAwesomeIcon className="icon-div" icon={faLinkedinIn} /> Catch
              me on LinkedIn
            </a>
          </CardText>
        </CardBody>
      </Card>
      <SiteNavbar stylingClass="navbar-connect" />
    </div>
  );
}

export default AboutMe;

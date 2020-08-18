import React from "react";
import SVG from "./SVG";
import SiteNavbar from "./SiteNavbar";
import "./Projects.css";
import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faSearchDollar,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { faSmileBeam } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <div className="projects-container">
      <SVG
        numOfCircles={500}
        distanceBetween={17}
        charge={60}
        withForce={false}
      />
      <div className="projects-text-container">
        <h1 className="projects-header">
          Some things I've built <FontAwesomeIcon icon={faSmileBeam} />
        </h1>
        <Row>
          <Col xs="6">
            <Card className="project" style={{ backgroundColor: "white" }}>
              <CardBody>
                <CardTitle>
                  <h2 className="project-title">
                    Warbler <FontAwesomeIcon icon={faTwitter} />
                  </h2>
                </CardTitle>
                <CardText className="project-text">
                  A Twitter clone application built with Python, Flask, and
                  PostgreSQL.
                  <span className="project-links">
                    Deployed on{" "}
                    <a
                      className="project-link"
                      href="https://warbler-star.herokuapp.com/"
                      target="_blank"
                    >
                      Heroku
                    </a>
                    <br></br>
                    View the source code on{" "}
                    <a
                      className="project-link"
                      href="https://github.com/hatz7505/warbler"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6">
            <Card className="project" style={{ backgroundColor: "white" }}>
              <CardBody>
                <CardTitle>
                  <h2 className="project-title">
                    Microblog <FontAwesomeIcon icon={faLaptop} />
                  </h2>
                </CardTitle>
                <CardText className="project-text">
                  A blogging app built using React and Redux. Incorporates basic
                  blogging functionalities, including adding, editing, and
                  deleting blog posts and comments, as well as up- and
                  down-voting.
                  <span className="project-links">
                    View the source code on{" "}
                    <a
                      className="project-link"
                      href="https://github.com/vanvemden/react-redux-microblog-frontend"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Card className="project" style={{ backgroundColor: "white" }}>
              <CardBody>
                <CardTitle>
                  <h2 className="project-title">
                    Job.ly <FontAwesomeIcon icon={faSearchDollar} />
                  </h2>
                </CardTitle>
                <CardText className="project-text">
                  A job posting and application site built using React on the
                  frontend, Express and PostgreSQL on the backend.
                  <span className="project-links">
                    View the source code on{" "}
                    <a
                      className="project-link"
                      href="https://github.com/hatz7505/jobly"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6">
            <Card className="project" style={{ backgroundColor: "white" }}>
              <CardBody>
                <CardTitle>
                  <h2 className="project-title">
                    Match a Kween <FontAwesomeIcon icon={faCrown} />
                  </h2>
                </CardTitle>
                <CardText className="project-text">
                  A card matching memory game. Built as a single page web
                  application using JavaScript and JQuery.
                  <span className="project-links">
                    Deployed on{" "}
                    <a
                      className="project-link"
                      href="https://hatz7505.github.io/memory-game/"
                      target="_blank"
                    >
                      Github
                    </a>
                    <br></br>
                    View the source code on{" "}
                    <a
                      className="project-link"
                      href="https://github.com/hatz7505/memory-game"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <SiteNavbar stylingClass="navbar-projects" selected="projects" />
    </div>
  );
}

export default Projects;

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
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <div className="projects-container" data-testid="projects">
      <SVG
        numOfCircles={500}
        distanceBetween={17}
        charge={60}
        withForce={false}
      />
      <div className="projects-text-container">
        <h1 className="projects-header">Some things I've built</h1>
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
                  PostgreSQL. Functionalities include signing up, logging in and
                  out, liking and disliking posts, adding and deleting your own
                  posts and following other users.
                  <span className="project-links">
                    Deployed on{" "}
                    <a
                      className="project-link"
                      href="https://warbler-star.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Heroku
                    </a>
                    <br></br>
                    View the source code on{" "}
                    <a
                      className="project-link"
                      href="https://github.com/hatz7505/warbler"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      href="https://github.com/hatz7505/microblog"
                      target="_blank"
                      rel="noopener noreferrer"
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
                  frontend, Express and PostgreSQL on the backend. Includes user
                  signup and authentication logic, ability to search through
                  available jobs and apply to them as well.
                  <span className="project-links">
                    View the source code on{" "}
                    <a
                      className="project-link"
                      href="https://github.com/hatz7505/jobly"
                      target="_blank"
                      rel="noopener noreferrer"
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
                  A card matching memory game. Built using JavaScript, JQuery
                  and CSS for a 3D effect when the card flips over. Number of
                  clicks kept track of and new high scores stored in
                  localStorage. Try to beat my personal best of 36 clicks!
                  <span className="project-links">
                    Deployed on{" "}
                    <a
                      className="project-link"
                      href="https://hatz7505.github.io/memory-game/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Pages
                    </a>
                    <br></br>
                    View the source code on{" "}
                    <a
                      className="project-link"
                      href="https://github.com/hatz7505/memory-game"
                      target="_blank"
                      rel="noopener noreferrer"
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

import React from "react";
import "./Projects.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faSearchDollar, faCrown } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <div>
      <h1 className="projects-header">Some projects I've worked on</h1>
      <Card className="project" style={{ backgroundColor: "white" }}>
        <CardBody>
          <CardTitle>
            <h2>
              Warbler <FontAwesomeIcon icon={faTwitter} />
            </h2>
          </CardTitle>
          <CardText className="project-text">
            A Twitter clone app built with Python, Flask, and PostgreSQL.
            <div className="warbly-heroku-link">
              Deployed on{" "}
              <a href="https://warbler-star.herokuapp.com/" target="_blank">
                Heroku
              </a>
            </div>
            <div>
              View the source code on{" "}
              <a href="https://github.com/hatz7505/warbler" target="_blank">
                Github
              </a>
            </div>
          </CardText>
        </CardBody>
      </Card>
      <Card className="project" style={{ backgroundColor: "white" }}>
        <CardBody>
          <CardTitle>
            <h2>
              Microblog <FontAwesomeIcon icon={faLaptop} />
            </h2>
          </CardTitle>
          <CardText className="project-text">
            A blogging app built using React and Redux. Incorporates basic
            blogging functionalities, including adding, editing, and deleting
            blog posts and blog post comments, as well as up- and down-voting.
            <div className="microblog-github-link">
              View the source code on{" "}
              <a
                href="https://github.com/vanvemden/react-redux-microblog-frontend"
                target="_blank"
              >
                Github
              </a>
            </div>
          </CardText>
        </CardBody>
      </Card>
      <Card className="project" style={{ backgroundColor: "white" }}>
        <CardBody>
          <CardTitle>
            <h2>
              Job.ly <FontAwesomeIcon icon={faSearchDollar} />
            </h2>
          </CardTitle>
          <CardText className="project-text">
            a job posting and application site built using React on the
            frontend, Express and PostgreSQL on the backend.
            <div className="jobly-github-link">
              View the source code on{" "}
              <a href="https://github.com/hatz7505/jobly" target="_blank">
                Github
              </a>
            </div>
          </CardText>
        </CardBody>
      </Card>
      <Card className="project" style={{ backgroundColor: "white" }}>
        <CardBody>
          <CardTitle>
            <h2>
              Match a Kween <FontAwesomeIcon icon={faCrown} />
            </h2>
          </CardTitle>
          <CardText className="project-text"></CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Projects;

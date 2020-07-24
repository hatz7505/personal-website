import React from "react";
import SVG from "./SVG";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  function enterSite() {
    history.push("/about");
  }
  return (
    <div>
      <Button
        onClick={enterSite}
        className="welcome-button"
        color="info"
        style={{ fontSize: 22 }}
      >
        welcome :)
      </Button>
      <SVG
        numOfCircles={300}
        distanceBetween={1.5}
        charge={140}
        withForce={true}
      />
    </div>
  );
}

export default HomePage;

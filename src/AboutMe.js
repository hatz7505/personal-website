import React from "react";
import SVG from "./SVG";

function AboutMe() {
  return (
    <div>
      <div className="about-me-background">
        <h1 className="my-name">
          <b>h</b>arry <b>a</b>ustryn <b>t</b>eplow
        </h1>
        <p>
          <b>hi there!</b> I’m a software engineer based out of beautiful San
          Francisco. My professional career has grown from a full time
          restaurant server to an Operations Manager at a food tech startup, and
          today I’m excited and grateful for my journey in engineering. I love
          to create and consider myself a problem solver and I like to approach
          coding with this same creativity and diligence. Outside of work, I
          love to cook and am most passionate about all things nutrition. I even
          started my own{" "}
          <a href='www.theharrybanana.com'>small food business</a> as a side
          passion-project that I operate on weekends selling healthy vegan
          sweets. I dream of the day I am able to open my own perfectly pastel
          pink storefront.
        </p>
      </div>
      <SVG
        numOfCircles={500}
        distanceBetween={17}
        charge={60}
        withForce={false}
      />
    </div>
  );
}

export default AboutMe;

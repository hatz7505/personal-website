import React, { useRef, useEffect } from "react";
import { select } from "d3-selection";
import * as d3 from "d3";
import { forceSimulation } from "d3-force";

function SVG({ distanceBetween, charge, numOfCircles, withForce }) {
  const WIDTH = window.screen.width;
  const HEIGHT = window.screen.height - window.screen.height * 0.17;
  // use ref to have reference to the svg so we can access it as a d3 object
  // in our use effect on render
  const svgRef = useRef(null);
  useEffect(() => {
    let svg = select(svgRef.current);
    // create an array of 300 circle node objects with random radius sizes
    let nodes = d3.range(numOfCircles).map(function () {
      return { radius: Math.random() * 12 + 7, x: WIDTH / 2, y: HEIGHT / 2 };
    });

    // create a root node object and fill color options
    let root = nodes[0];
    let colorOptions = [
      "#ABDEE6",
      "FFFFB5",
      "#ECD5E3",
      "FFDBCC",
      "FEE1E8",
      "#FFD8BE",
      "#F3B0C3",
      "#CCE2CB",
      "CBAACB",
    ];
    root.radius = 0;
    root.fixed = true;
    root.x = 0;
    root.y = 0;

    // create a new force-directed layout that starts in the center of the screen
    const forceX = d3.forceX(WIDTH / 2).strength(0.015);
    const forceY = d3.forceY(HEIGHT / 2).strength(0.015);

    let force = withForce
      ? forceSimulation()
          .velocityDecay(0.28)
          .force("x", forceX)
          .force("y", forceY)
          .force(
            "collide",
            d3
              .forceCollide()
              .radius(function (d) {
                if (d === root) {
                  return charge;
                }
                return d.radius + distanceBetween;
              })
              .iterations(5)
          )
          .nodes(nodes)
          .on("tick", function (e) {
            // after collision detection, update the positions of the circles in the dom
            svg
              .selectAll("circle")
              .attr("cx", function (d) {
                return d.x;
              })
              .attr("cy", function (d) {
                return d.y;
              });
          })
      : forceSimulation()
          .velocityDecay(0.28)
          .force(
            "collide",
            d3
              .forceCollide()
              .radius(function (d) {
                if (d === root) {
                  return charge;
                }
                return d.radius + distanceBetween;
              })
              .iterations(5)
          )
          .nodes(nodes)
          .on("tick", function (e) {
            // after collision detection, update the positions of the circles in the dom
            svg
              .selectAll("circle")
              .attr("cx", function (d) {
                return d.x;
              })
              .attr("cy", function (d) {
                return d.y;
              });
          });

    // join all our nodes data except the root to the svg as circle elements
    // starting in the center of the screen with randomized radius' and color fills
    svg
      .selectAll("circle")
      .data(nodes.slice(1))
      .enter()
      .append("circle")
      .attr("r", function (d) {
        return d.radius;
      })
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .style("fill", function () {
        return colorOptions[Math.floor(colorOptions.length * Math.random())];
      });

    // whenever the mouse moves in the svg, set roots position based on mouses position
    // and restart the simulation with new alpha
    svg.on("mousemove", function () {
      let p1 = d3.mouse(this);
      root.fx = p1[0];
      root.fy = p1[1];
      force.alphaTarget(0.3).restart();
    });
  }, [charge, distanceBetween, HEIGHT, WIDTH, numOfCircles]);
  return <svg ref={svgRef} width={WIDTH} height={HEIGHT} />;
}
export default SVG;

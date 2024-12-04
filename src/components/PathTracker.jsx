import React from "react";
import "./PathTracker.css";

const PathTracker = () => {
  return (
    <div className="g-container">
      <svg
        className="g-svg"
        width="400"
        height="160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="svgpath"
          d="M 350 40 C 1200 1000, -550 1000, 350 1960"
          stroke="black"
          fill="transparent"
        />
      </svg>
      <div className="ball"></div>
      <div className="point point1"></div>
      <div className="point point2"></div>
      <div className="point point3"></div>
      <h2>CSS Scroll Driven</h2>
      <p className="p1">
        CSS Scroll Driven refers to a technique where CSS is used to create
        visual effects or animations that are triggered by the scrolling
        behavior of the user. It involves manipulating CSS properties based on
        the scroll position to create dynamic and interactive elements on a
        webpage.
      </p>
      <p className="p2">
        1. Parallax scrolling: By adjusting background positions or opacity
        based on the scroll position.
        <br />
        2.Sticky navigation: The navigation bar can have its style modified as
        the user scrolls, such as changing its background color, size, or
        position to enhance usability and improve the user experience.
      </p>
      <p className="p3">
        In summary, CSS Scroll Driven involves using CSS and JavaScript to
        create effects and animations that respond to the user's scrolling
        behavior. This technique adds interactivity and visual appeal to
        webpages, making them more engaging for users.
      </p>
    </div>
  );
};

export default PathTracker;

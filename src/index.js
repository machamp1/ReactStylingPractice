//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

let greeting;
let today = new Date();
let year = today.getFullYear();
let currentHour = today.getHours();

const customStyle = {
  color: ""
};

if (currentHour < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentHour >= 12 && currentHour <= 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
    <p>{currentHour}</p>
  </div>,
  document.getElementById("root")
);

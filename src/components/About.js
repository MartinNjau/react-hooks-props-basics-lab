import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
       {
        props.bio===undefined || props.bio.length !==" " ? <p>{props.bio}</p> : null
       }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this!" />

      {<Links LinkedIn={props.links.linkedin}  Github={props.links.github}/>}
    </div>
  );
}

export default About;

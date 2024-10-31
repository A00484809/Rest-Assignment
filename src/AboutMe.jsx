import React from "react";
import profilePic from "./my-pic.png";

function AboutMe() {
  return (
    <div className="about-container">
      <div style={{ position: "relative" }}>
        <img src={profilePic} alt="Kedar" className="profile-image" />
        <div className="overlay-text">
          <h1>Kedar Gaikwad</h1>
          <p >
            I am currently a student pursuing an MSc in Computing and Data Analytics at Saint
            Mary's University. My background includes extensive experience in data analysis and ad tech.</p>
           <p> I joined the MCDA program to deepen my knowledge in data and technology,
        develop new analytical skills, and pursue a career in product management</p>
          
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

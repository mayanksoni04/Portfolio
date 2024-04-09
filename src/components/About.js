import React from "react";

import photo from "../profile-pic (6).png";
export default function About() {
  return (
    <>
      <div className="Aboutaparent">
        <div className="Aboutchild">
          <h2>About Me</h2>
        </div>
        <div className="Aboutpara">
          <img src={photo} alt="" />
          <p>
            I'm <i>Mayank Soni</i>, a <i>web developer, graphic designer, </i>
            and<i> video editor</i>. With expertise in{" "}
            <i>HTML, CSS, JavaScript,</i> and <i>React.js</i>, I create engaging
            web experiences. I design impactful visuals for logos, branding, and
            websites, resonating with audiences. Skilled in video editing, I
            create engaging content with effects and animations.
          </p>
        </div>
      </div>
    </>
  );
}

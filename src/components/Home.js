import React from "react";
import logo from "../logo (2).png";
export default function Home() {
  return (
    <>
      <div>
        <div className="homeparent">
          <div className="hometext">
            <h3>Hello,</h3>
            <div>
              <h2>
                I am <b> Mayank </b>
              </h2>
            </div>
            <div className="web">
              <h2>Web Developer</h2>
            </div>
            <div>
              <p>
                Experienced web developer proficient in HTML, CSS, and
                JavaScript, dedicated to crafting <br />
                visually appealing and functional websites. Collaborative team
                player, adept at staying
                <br /> current with industry trends and employing innovative
                solutions for optimal user experiences.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1-Ae3_VE7GYwLGI95FCZ80-VESlf3UU0A?usp=sharing"
                  )
                }
              >
                Resume
              </button>
            </div>
          </div>
          <div className="imagehome">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

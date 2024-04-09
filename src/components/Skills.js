import React from "react";
import react from "../skillslogo/1174949_js_react js_logo_react_react native_icon.png";
import html from "../skillslogo/317755_badge_html_html5_achievement_award_icon.png";
import css from "../skillslogo/317756_badge_css_css3_achievement_award_icon.png";
import js from "../skillslogo/4373213_js_logo_logos_icon.png";
import python from "../skillslogo/4375050_logo_python_icon.png";
import c from "../skillslogo/c-logo.png";
import ps from "../skillslogo/524279_ps_design_graphic_tools_adobe_icon.png";
import ae from "../skillslogo/524263_ae_adobe_after_aftereffects_icon.png";
export default function Skills() {
  return (
    <>
      <h1>Technical/Non-Technical Skills</h1>
      <div className="parentofparent">
        <div className="progressparent">
          <div className="progresschild">
            <img src={react} alt="" />
            <h4>React js</h4>
            <div className="loader">
              <div className="loaderfill"></div>
            </div>
            <div className="react">
              <h6>70%</h6>
            </div>
          </div>
          <div className="progresschild">
            <img src={html} alt="" />
            <h4>HTML</h4>
            <div className="loaderhtml">
              <div className="loaderfillhtml"></div>
            </div>
            <div className="html">
              <h6>80%</h6>
            </div>
          </div>
          <div className="progresschild">
            <img src={js} alt="" />
            <h4>JavaScript</h4>
            <div className="loaderjs">
              <div className="loaderfilljs"></div>
            </div>
            <div className="js">
              <div className="js">
                {" "}
                <h6>60%</h6>
              </div>
            </div>
          </div>
          <div className="progresschild">
            <img src={css} alt="" />
            <h4>CSS</h4>
            <div className="loadercss">
              <div className="loaderfillcss"></div>
            </div>
            <div className="css">
              <h6>70%</h6>
            </div>
          </div>
        </div>
        <div className="progressparent">
          <div className="progresschild">
            <img src={python} alt="" />
            <h4>Python</h4>
            <div className="loaderpy">
              <div className="loaderfillpy"></div>
            </div>
            <div className="py">
              <h6>50%</h6>
            </div>
          </div>
          <div className="progresschild">
            <img src={c} alt="" />
            <h4>C/C++</h4>
            <div className="loaderc">
              <div className="loaderfillc"></div>
            </div>
            <div className="c">
              <h6>60%</h6>
            </div>
          </div>
          <div className="progresschild">
            <img src={ps} alt="" />
            <h4>Photoshop</h4>
            <div className="loaderps">
              <div className="loaderfillps"></div>
            </div>
            <div className="ps">
              <h6>95%</h6>
            </div>
          </div>
          <div className="progresschild">
            <img src={ae} alt="" />
            <h4>After Effects </h4>
            <div className="loaderae">
              <div className="loaderfillae"></div>
            </div>
            <div className="ae">
              <h6>90%</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

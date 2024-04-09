import React from "react";
import helmet from "../projects/man with helmet.jpg";
import wheather from "../projects/wheather.png";
import gallery from "../projects/gallery.png";
import dict from "../projects/dict.png";
import todo from "../projects/to do.png";
import shop from "../projects/shop.png";
import quiz from "../projects/quiz.png";
import port from "../projects/project5.png";
export default function Projects() {
  return (
    <>
      <h1>My Projects</h1>
      <div className="box">
        <div className="boxparent">
          <img src={helmet} alt="" />
          <div className="boxchild">
            <h1>Helmet Detection</h1>
            <p>
              Developed real-time helmet detection system using computer vision
              and deep learning, enhancing safety measures.
            </p>
          </div>
        </div>
        <div className="boxparent">
          <a
            href="https://weatherapp-jkkz.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wheather} alt="" />
            <div className="boxchild">
              <div className="w">
                <h1>Wheather App</h1>
              </div>
              <p>
                Real-time weather information based on user location or search,
                with forecasts and interactive maps.
              </p>
            </div>
          </a>
        </div>
        <div className="boxparent">
          <img src={quiz} alt="" />
          <div className="boxchild">
            <div className="q">
              <h1>Quiz App</h1>
            </div>
            <p>
              Interactive application for testing knowledge, tracking scores,
              and competing with friends.
            </p>
          </div>
        </div>
        <div className="boxparent">
          <img src={dict} alt="" />
          <div className="boxchild">
            <div className="d">
              <h1>Dictionary</h1>
            </div>
            <p>
              Created a user-friendly dictionary app with search, definitions,
              synonyms, antonyms, and examples
            </p>
          </div>
        </div>
        <div className="boxparent">
          <a
            href="https://gallery-8lq1.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gallery} alt="" />
            <div className="boxchild">
              <div className="g">
                <h1>Gallery</h1>
              </div>
              <p>
                Gallery app allowing users to like and dislike posts for quick
                feedback and engagement
              </p>
            </div>
          </a>
        </div>
        <div className="boxparent">
          <img src={todo} alt="" />
          <div className="boxchild">
            <div className="t">
              <h1>To-Do App</h1>
            </div>
            <p>
              Developed a feature-rich todo app with task management, priority
              setting, and category organization.
            </p>
          </div>
        </div>
        <div className="boxparent">
          <img src={port} alt="" />
          <div className="boxchild">
            <div className="p">
              <h1>Portfolio</h1>
            </div>
            <p>
              Dynamic portfolio showcasing web development, graphic design, and
              video editing projects with creativity.
            </p>
          </div>
        </div>
        <div className="boxparent">
          <img src={shop} alt="" />
          <div className="boxchild">
            <div className="e">
              <h1>E-commerce</h1>
            </div>
            <p>
              E-commerce website design using HTML and CSS for a responsive,
              user-friendly experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [nav, setnav] = useState(false);
  const [home, setHome] = useState(true);
  const [skills, setskills] = useState(false);
  const [about, setabout] = useState(false);
  const [contact, setcontact] = useState(false);
  const [project, setproject] = useState(false);
  const onChange = () => {
    setnav(!nav);
  };
  const handleHome = () => {
    setHome(true);
    setabout(false);
    setcontact(false);
    setproject(false);
    setskills(false);
  };
  const handleAbout = () => {
    setabout(true);
    setHome(false);
    setcontact(false);
    setproject(false);
    setskills(false);
  };
  const handleSkills = () => {
    setskills(true);
    console.log(skills);
    setabout(false);
    setcontact(false);
    setproject(false);
    setHome(false);
  };
  const handleContact = () => {
    setcontact(true);
    console.log(contact);

    setabout(false);
    setHome(false);
    setproject(false);
    setskills(false);
  };
  const handleProjects = () => {
    setproject(true);
    setabout(false);
    setHome(false);
    setcontact(false);
    setskills(false);
  };
  return (
    <>
      <div className="navparent">
        <div className="navchild">
          <Link
            onClick={handleHome}
            style={{ color: home ? "orange" : "black", textDecoration: "none" }}
            to="/"
          >
            {" "}
            Home
          </Link>
          <Link
            onClick={handleAbout}
            style={{
              color: about ? "orange" : "black",
              textDecoration: "none",
            }}
            to="/About"
          >
            About
          </Link>
          <Link
            onClick={handleSkills}
            style={{
              color: skills ? "orange" : "black",
              textDecoration: "none",
            }}
            to="/Skills"
          >
            Skills
          </Link>
          <Link
            onClick={handleProjects}
            style={{
              color: project ? "orange" : "black",
              textDecoration: "none",
            }}
            to="/Projects"
          >
            Projects
          </Link>
          <Link
            onClick={handleContact}
            style={{
              color: contact ? "orange" : "black",
              textDecoration: "none",
            }}
            to="/Contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="mobileview">
        {nav ? (
          <div onClick={onChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fefbf1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        ) : (
          <div onClick={onChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke=" #fefbf1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </div>
        )}
      </div>
      {nav ? (
        <div className="mobilemenu">
          {nav ? (
            <div>
              <Link onClick={onChange} to="/">
                Home
              </Link>
            </div>
          ) : null}
          {nav ? (
            <div>
              <Link onClick={onChange} to="/About">
                About
              </Link>
            </div>
          ) : null}
          {nav ? (
            <div>
              <Link onClick={onChange} to="/Skills">
                Skills
              </Link>
            </div>
          ) : null}
          {nav ? (
            <div>
              <Link onClick={onChange} to="/Projects">
                Projects
              </Link>
            </div>
          ) : null}
          {nav ? (
            <div>
              <Link onClick={onChange} to="/Contact">
                Contact
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

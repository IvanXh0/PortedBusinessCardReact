import React from "react";
import "./App.css";
import myimage from "./assets/myimage.jpg";
import mail from "./assets/Mail.png";
import linkedin from "./assets/linkedin.png";

function App() {
  return (
    <div className="personal-info">
      <img src={myimage} alt="myimage" />
      <div className="text-info">
        <h3>Ivan Apostolovski</h3>
        <h4>FullStack Developer</h4>
        <h5>github.com/IvanXh0</h5>
        <div className="button-class">
          <a href="mailto:ivan.apostolovski@gmail.com">
            <button id="btn-email">
              <img src={mail} alt="" />
              Email
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ivan-apostolovski-22b361211/"
          >
            <button id="btn-linkedin">
              <img src={linkedin} alt="" />
              Linkedin
            </button>
          </a>
        </div>
        <div className="about-section">
          <div className="about">
            <h3>About</h3>
            <p>
              I'm an aspiring FullStack Developer that's currently enrolled in
              the SEDC Code Academy. I hope to come back to this in a few months
              and laugh at how easy it was.
            </p>
            <div className="interests">
              <h3>Interests</h3>
              <p>
                Coding. More coding. Working out. Driving and talking about
                cars. Did i mention coding yet?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

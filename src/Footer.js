import React from "react";
import "./Footer.css";
import facebook from "./assets/Facebook.png";
import github from "./assets/GitHub.png";
import twitter from "./assets/Twitter.png";
import instagram from "./assets/Instagram.png";

function Footer() {
  return (
    <div className="navigation-logo-bar">
      <a target="_blank" href="https://www.facebook.com/nobody144">
        <img src={facebook} alt="" />
      </a>
      <a target="_blank" href="https://www.instagram.com/ivan.apostolovski/">
        <img src={instagram} alt="" />
      </a>
      <a target="_blank" href="https://twitter.com/ivanxhoka">
        <img src={twitter} alt="" />
      </a>
      <a target="_blank" href="https://github.com/IvanXh0">
        <img src={github} alt="" />
      </a>
    </div>
  );
}

export default Footer;

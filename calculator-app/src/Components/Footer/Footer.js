import React from "react";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.socialMedia}>
        <a href="https://www.linkedin.com/in/fernando-augusto-cavalcanti/">
          <img
            src={require("../../Images/linkedinIcon.ico")}
            alt="githubIcon"
            className={style.linkedinIcon}
          />
        </a>
        <a href="https://github.com/FernandoCavalcantii">
          <img
            src={require("../../Images/githubIcon.png")}
            alt="githubIcon"
            className={style.githubIcon}
          />
        </a>
      </div>
      <div className={style.assignature}>
        <p>Designed by:</p>
        <h2>Fernando Cavalcanti</h2>
      </div>
    </footer>
  );
};

export default Footer;

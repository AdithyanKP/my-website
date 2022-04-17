import React from "react";
import styles from "./Home.module.css";

import Projects from "./Projects/Projects";
import animation from "../assets/developer.gif";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layoutOne}>
        <div className={styles.miniLayoutOne}>
          <p className={styles.para}>
            Hi there..
            <br /> I currently work as a software developer at Infospica
            consultancy and services. I've completed my BCA Graduation in
            2018-2021. Currently working in custom web and mobile application
            development.
          </p>
        </div>
        <img className={styles.animation} src={animation} alt=""></img>
      </div>

      <Projects />
    </div>
  );
};

export default Home;

import React from "react";
import image from "../../assets/pic.png";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>
      <div className={styles.imagecontainer}>
        <p className={styles.p}>Covid-19 tracker</p>
        <div>
          <img className={styles.image} src={image}></img>
        </div>
        <p className={styles.p}>
          Tech stack: React js, Axios, React Chartjs, React Hooks
        </p>
        <a
          className={styles.a}
          href="https://adithyan-covid-19-tracker.netlify.app"
        >
          Check it out ✔
        </a>
      </div>
    </div>
  );
};

export default Projects;

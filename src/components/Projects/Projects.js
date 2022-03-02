import React from "react";
import image from "../../assets/pic.png";
import netfliximage from "../../assets/netflix.png";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>
      <div className={styles.imagecontainer}>
        <p className={styles.title}>Covid-19 tracker</p>
        <div>
          <img className={styles.image} src={image} alt=""></img>
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
      <div className={styles.imagecontainer}>
        <p className={styles.title}>Netflix clone</p>
        <div>
          <img className={styles.image} src={netfliximage} alt=""></img>
        </div>
        <p className={styles.p}>
          Tech stack: React js, Axios, TMDB Api, React Hooks
        </p>
        <a className={styles.a} href="https://adiflix.netlify.app/">
          Check it out ✔
        </a>
      </div>
    </div>
  );
};

export default Projects;

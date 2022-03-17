import React from "react";
import image from "../../assets/pic.png";
import netfliximage from "../../assets/netflix.png";
import eplant from "../../assets/eplant.png";

import styles from "./Projects.module.css";
import { Button } from "react-bootstrap";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>
      <div className={styles.imagecontainer}>
        <div className={styles.imagecontainer}>
          <p className={styles.title}>E-Plant</p>

          <div>
            <img className={styles.image} src={eplant} alt=""></img>
          </div>
          <div className={styles.a}>
            <Button
              variant="info"
              href="https://github.com/AdithyanKP/E-PLANT.git"
            >
              View Github repo
            </Button>
          </div>
        </div>
        <p className={styles.title}>Covid-19 tracker</p>
        <div>
          <img className={styles.image} src={image} alt=""></img>
        </div>

        <div className={styles.a}>
          <Button
            variant="info"
            href="https://adithyan-covid-19-tracker.netlify.app"
          >
            View Demo
          </Button>
        </div>
      </div>
      <div className={styles.imagecontainer}>
        <p className={styles.title}>Netflix clone</p>
        <div>
          <img className={styles.image} src={netfliximage} alt=""></img>
        </div>

        <div className={styles.a}>
          <Button variant="info" href="https://adiflix.netlify.app/">
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

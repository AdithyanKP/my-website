import React from "react";
import image from "../../assets/pic.png";
import netfliximage from "../../assets/netflix.png";
import eplant from "../../assets/eplant.png";
import quiz from "../../assets/quiz.png";
import todo from "../../assets/todo.png";
import styles from "./Projects.module.css";
import { Button } from "react-bootstrap";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>

      {/*    E-plant project */}
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

      {/* covid -19 Tracker */}
      <div className={styles.imagecontainer}>
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

      {/* Netflix-clone */}
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

      {/*  Quiz-app */}
      <div className={styles.imagecontainer}>
        <p className={styles.title}>Quiz-App</p>
        <div>
          <img className={styles.image} src={quiz} alt=""></img>
        </div>

        <div className={styles.a}>
          <Button variant="info" href="https://quizz-kp.netlify.app/">
            View Demo
          </Button>
        </div>
      </div>

      {/* Todo app */}
      <div className={styles.imagecontainer}>
        <p className={styles.title}>Todo App</p>
        <div>
          <img className={styles.image} src={todo} alt=""></img>
        </div>

        <div className={styles.a}>
          <Button variant="info" href="https://todo-app-adithyan.netlify.app/">
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

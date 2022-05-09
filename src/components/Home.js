import React from "react";
import styles from "./Home.module.css";

import Projects from "./Projects/Projects";
import animation from "../assets/developer.gif";
import { Carousel } from "react-bootstrap";
import eplant from "../assets/eplant.png";
import netflix from "../assets/netflix.png";
import todo from "../assets/todo.png";
import eplantcart from "../assets/eplantcart.png";
import cshare from "../assets/cshare.png";
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
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={todo} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={cshare} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={netflix} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={eplant} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={eplantcart} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <Projects />
    </div>
  );
};

export default Home;

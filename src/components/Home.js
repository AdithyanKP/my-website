import React from "react";
import styles from "./Home.module.css";
import { Avatar } from "@mui/material";
import image from "../assets/image.jpeg";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Avatar alt="Remy Sharp" src={image} sx={{ width: 70, height: 70 }} />
      </div>

      <p className={styles.para}>
        Hello I am Adithyan K P I currently work as a software developer at
        Infospica consultancy and services💼. I've completed my BCA graduation
        in 2018-2021🎓. <br />
        Currently working in custom web and mobile application development.
      </p>
      <Projects />
    </div>
  );
};

export default Home;

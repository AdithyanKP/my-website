import React from "react";
import styles from "./Home.module.css";
import { Avatar, Link } from "@mui/material";
import image from "../assets/image.jpeg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Avatar alt="Remy Sharp" src={image} sx={{ width: 70, height: 70 }} />
      </div>
      <h1 className={styles.h1}>Adithyan KP</h1>
      <p className={styles.para}>
        📍I currently work as a software developer at Infospica consultancy and
        services😎.
        <br /> 📍I've completed my BCA graduation in 2018-2021🎓. <br />
        📍Currently working in custom web and mobile application development.
        <br />
      </p>
      <div className={styles.linkContainer}>
        <h1 className={styles.linkText}>Social Links</h1>
        <div className={styles.link}>
          <a href="https://www.linkedin.com/in/adithyan-k-p/">Visit LinkedIn</a>
        </div>
        <div className={styles.link}>
          <a href="https://github.com/AdithyanKP">Visit Github</a>
        </div>
        <div className={styles.link}>
          <a href="https://www.instagram.com/adhithyankp_/">Visit Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

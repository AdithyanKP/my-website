import React from "react";
import styles from "./about.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>React Js ✔</h1>
      <h1 className={styles.text}>React Native ✔</h1>
      <h1 className={styles.text}>Node Js ✔</h1>
      <h1 className={styles.text}>Git ✔</h1>
    </div>
  );
};

export default About;

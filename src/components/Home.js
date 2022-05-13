import React, { useState } from "react";
import styles from "./Home.module.css";

import Projects from "./Projects/Projects";
import animation from "../assets/developer.gif";

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Skill from "./Skill";

const Home = () => {
  const [value, setValue] = useState(0);

  const renderCompoent = () => {
    if (value === 0) {
      return <Projects />;
    } else if (value === 1) {
      return <Skill />;
    } else {
      return (
        <h3 style={{ display: "flex", justifyContent: "center", padding: 50 }}>
          Blogs are writing😊
        </h3>
      );
    }
  };
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
      <div>
        <Paper square>
          <Tabs
            value={value}
            textColor="primary"
            indicatorColor="primary"
            centered
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Tab label="Projects" />
            <Tab label="Skills" />
            <Tab label="Blog" />
          </Tabs>
        </Paper>
      </div>

      {renderCompoent()}
    </div>
  );
};

export default Home;

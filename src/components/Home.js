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
          Coming soon😊
        </h3>
      );
    }
  };
  return (
    <>
      <div className={styles.container}>
        <p style={{ padding: 8, fontSize: 15 }}>ADITHYAN KP</p>
        <div className={styles.layoutOne}>
          <div className={styles.miniLayoutOne}>
            <p className={styles.para}>
              Hi there..
              <br /> I am a Full Stack React Developer.
              <br /> Currently work as a Software Engineer at Infospica
              consultancy and services.
              <br /> I've completed my BCA Graduation in 2018-2021.
            </p>
          </div>
          {/*    <img className={styles.animation} src={animation} alt=""></img> */}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
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
      <div style={{ marginLeft: 20, marginRight: 20 }}>{renderCompoent()}</div>
    </>
  );
};

export default Home;

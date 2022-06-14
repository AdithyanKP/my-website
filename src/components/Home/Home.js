import React, { useState } from "react";
import styles from "./Home.module.css";

import Projects from "../Projects/Projects";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Skill from "../Skill/Skill";

const Home = () => {
  const [value, setValue] = useState(0);

  const renderCompoent = () => {
    if (value === 0) {
      return <Projects />;
    } else if (value === 1) {
      return <Skill />;
    } else {
      return (
        <div style={{ display: "flex", justifyContent: "center", padding: 50 }}>
          <h3>Coming soon😊</h3>
        </div>
      );
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className={styles.title}>
            <p className={styles.titleText}>ADITHYAN KP</p>
          </div>

          <div className={styles.icon}>
            <IconButton
              aria-label="Linkedin.com"
              onClick={() => window.open("https://github.com/AdithyanKP/")}
            >
              <GitHubIcon
                fontSize="large"
                style={{ color: "#bfbfbf", padding: 2, fontSize: 42 }}
              />
            </IconButton>
            <IconButton
              aria-label="Linkedin.com"
              onClick={() =>
                window.open("https://www.linkedin.com/in/adithyan-k-p/")
              }
            >
              <LinkedInIcon
                fontSize="large"
                style={{ color: "#bfbfbf", padding: 2, fontSize: 42 }}
              />
            </IconButton>
            <IconButton
              aria-label="Linkedin.com"
              onClick={() => window.open("https://twitter.com/adithyanKP_")}
            >
              <TwitterIcon
                fontSize="large"
                style={{ color: "#bfbfbf", padding: 2, fontSize: 42 }}
              />
            </IconButton>
          </div>
        </div>

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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <div style={{ backgroundColor: "#262626", width: "100%" }}>
            <Tabs
              value={value}
              textColor="inherit"
              indicatorColor="green"
              centered
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <Tab
                className={styles.tab}
                style={{ color: "white", fontSize: 16 }}
                label="Projects"
              />
              <Tab
                className={styles.tab}
                style={{ color: "white", fontSize: 16 }}
                label="Skills"
              />
              <Tab
                className={styles.tab}
                style={{ color: "white", fontSize: 16 }}
                label="Blog"
                disabled
              />
            </Tabs>
          </div>
        </div>
      </div>

      <div style={{ marginLeft: 20, marginRight: 20 }}>{renderCompoent()}</div>
    </>
  );
};

export default Home;

import React from "react";
import styles from "./Skill.module.css";
import { Paper, Typography } from "@mui/material";
const Skill = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layoutOne}>
        <div className={styles.child}>
          <Paper round>
            <Typography className={styles.typo}>React js</Typography>
          </Paper>
        </div>
        <div className={styles.child}>
          <Paper round>
            <Typography className={styles.typo}>React Native</Typography>
          </Paper>
        </div>
        <div className={styles.child}>
          <Paper round>
            <Typography className={styles.typo}>Javascript</Typography>
          </Paper>
        </div>
        <div className={styles.child}>
          <Paper round>
            <Typography className={styles.typo}>Redux Js</Typography>
          </Paper>
        </div>
      </div>

      <div className={styles.layoutTwo}>
        <div className={styles.child}>
          <Paper round>
            <Typography className={styles.typo}>Jest</Typography>
          </Paper>
        </div>
        <div className={styles.child}>
          <Paper round>
            <Typography className={styles.typo}>Node Js</Typography>
          </Paper>
        </div>
        <div className={styles.child}>
          <Paper round>
            <Typography className={styles.typo}>MySql</Typography>
          </Paper>
        </div>
        <div className={styles.child}>
          <Paper round>
            <Typography className={styles.typo}>MongoDB</Typography>
          </Paper>
        </div>
      </div>

      <div className={styles.layoutTwo}>
        <div className={styles.child}>
          <Paper round>
            <Typography className={styles.typo}>Git</Typography>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Skill;

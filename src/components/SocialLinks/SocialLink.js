import React from "react";
import styles from "./Social.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialLink = () => {
  return (
    <div>
      <div className={styles.linkContainer}>
        <h1 className={styles.linkText}>Social Links</h1>

        <div className={styles.link}>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() => window.open("https://github.com/AdithyanKP/")}
          >
            <GitHubIcon fontSize="large" color="info" />
          </IconButton>
        </div>
        <div className={styles.link}>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open("https://www.linkedin.com/in/adithyan-k-p/")
            }
          >
            <LinkedInIcon fontSize="large" color="info" />
          </IconButton>
        </div>
        <div className={styles.link}>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open("https://www.instagram.com/adhithyankp_/")
            }
          >
            <InstagramIcon fontSize="large" color="info" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;

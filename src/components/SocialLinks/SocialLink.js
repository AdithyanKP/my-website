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
        <div className={styles.link}>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() => window.open("https://github.com/AdithyanKP/")}
          >
            <GitHubIcon
              fontSize="large"
              style={{ color: "white", padding: 2 }}
            />
          </IconButton>
        </div>
        <div className={styles.link}>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open("https://www.linkedin.com/in/adithyan-k-p/")
            }
          >
            <LinkedInIcon
              fontSize="large"
              style={{ color: "white", padding: 2 }}
            />
          </IconButton>
        </div>
        <div className={styles.link}>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open("https://www.instagram.com/adhithyankp_/")
            }
          >
            <InstagramIcon
              fontSize="large"
              style={{ color: "white", padding: 2 }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;

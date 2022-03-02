import React from "react";
import styles from "./Social.module.css";
const SocialLink = () => {
  return (
    <div>
      <div className={styles.linkContainer}>
        <h1 className={styles.linkText}>Social Links</h1>
        <div className={styles.link}>
          <a href="https://www.linkedin.com/in/adithyan-k-p/">
            Visit LinkedIn ✔
          </a>
        </div>
        <div className={styles.link}>
          <a href="https://github.com/AdithyanKP">Visit Github ✔</a>
        </div>
        <div className={styles.link}>
          <a href="https://www.instagram.com/adhithyankp_/">
            Visit Instagram ✔
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;

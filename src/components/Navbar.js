import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Adithyan</h2>
      <ul className={styles.navlinks}>
        <Link to="/" className={styles.home}>
          <li>Home</li>
        </Link>
        <Link to="/about" className={styles.about}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

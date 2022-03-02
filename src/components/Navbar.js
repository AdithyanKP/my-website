import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlinks}>
        <li>
          <NavLink
            end
            to="/"
            style={({ isActive }) => {
              return {
                fontSize: isActive ? 25 : 20,
              };
            }}
            className={styles.home}
          >
            Myself
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to="/skills"
            style={({ isActive }) => {
              return {
                fontSize: isActive ? 25 : 20,
              };
            }}
            className={styles.about}
          >
            Skills
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
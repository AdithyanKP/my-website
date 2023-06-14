import React from "react";

import styles from "./Projects.module.css";

import { Button } from "@mui/material";

import {
  nodejs,
  react,
  javascript,
  mysql,
  mongoose,
} from "../../constants/Constant";

const Projects = () => {
  return (
    <div className={styles.container}>
      {/*    E-plant project */}
      <div className={styles.itemcontainer}>
        <div>
          <p className={styles.title} style={{ marginTop: 30 }}>
            E-Plant Server-Side web application, E-Commerce
          </p>
          <p className={styles.content}>
            "E-Plant is an e-commerce application that enables users to purchase
            indoor plants and pots both online and offline. The application also
            provides the admin with access to product details, order details,
            user information, and order management. Enhanced security is
            implemented in this application with the help of the Bcrypt
            library."
            <br /> "E-Plant is one of the most memorable projects I have
            completed, marking my first full-stack project in my career. I
            initially experienced a sense of stress due to the newness of
            everything involved. However, I made a firm commitment to persevere
            at all costs. As a result, I successfully completed the project with
            excellence. After its completion, I felt a great sense of
            achievement and gained a significant boost in confidence to tackle
            future challenges."
            <br />
            Node js, Express js, HTML, CSS, HBS, MYSQL are the mainly used tech
            stack in this project..
          </p>

          <div className={styles.gitcontainer}>
            <a className={styles.lang_box} href={nodejs}>
              node js
            </a>
            <a className={styles.lang_box} href={mysql}>
              mySql
            </a>
            <a className={styles.lang_box} href={javascript}>
              javascript
            </a>
            <span className={styles.lang_box}>express js</span>
          </div>

          <div className={styles.a}>
            <Button
              style={{
                color: "white",
                backgroundColor: "#262626",
                border: "none",
                borderRadius: 8,
                padding: 5,
              }}
              href="https://github.com/AdithyanKP/E-PLANT.git"
            >
              View Github repo
            </Button>
          </div>
        </div>
      </div>

      {/* logus */}
      <div className={styles.itemcontainer}>
        <div>
          <p className={styles.title}>
            Logus SocialMedia application,Fully Featured Authentication
          </p>
          <p className={styles.content}>
            "Logus is my second full-stack project, a social media app that
            allows users to create and share content, like posts, and delete
            their own posts. One of the prominent features of Logus is the
            integration of Google authentication, providing a seamless login
            experience for users. I implemented JWT (JSON Web Tokens) for robust
            authentication functionality, ensuring secure user sessions.
            Additionally, I successfully implemented the entire authentication
            process, including forgot and reset password functionalities with
            email verification. To manage the application state effectively, I
            utilized Redux JS."
            <br />
            React js , Redux js,MUI, Node js, Express Js, Mongoose are the main
            tech stack of this project.
          </p>

          <div className={styles.gitcontainer}>
            <a className={styles.lang_box} href={nodejs}>
              node js
            </a>
            <a className={styles.lang_box} href={react}>
              react js
            </a>
            <span className={styles.lang_box}>express js</span>
            <a className={styles.lang_box} href={mongoose}>
              mongoose
            </a>
          </div>

          <div className={styles.a}>
            <Button
              style={{
                color: "white",
                backgroundColor: "#262626",
                border: "none",
                borderRadius: 8,
                padding: 5,
              }}
              href="https://github.com/AdithyanKP/C-Share-MERN.git"
            >
              View Github repo
            </Button>
          </div>
        </div>
      </div>

      {/* Netflix-clone */}
      <div className={styles.itemcontainer}>
        <div>
          <p className={styles.title}>Netflix clone , API consumption,</p>
          <p className={styles.content}>
            "In my free time, I enjoy watching series and movies on Netflix.
            Inspired by this experience, I embarked on a journey to clone
            Netflix using React. It proved to be an incredible learning
            opportunity, allowing me to deepen my understanding of React
            components, state management, props, and more. To fetch and handle
            data, I leveraged the TMDB API, utilizing Axios for seamless API
            requests. As a result, the app enables users to watch movie trailers
            alongside other functionalities."
          </p>
        </div>
      </div>

      <div className={styles.gitcontainer}>
        <a className={styles.lang_box} href={react}>
          react js
        </a>
        <a className={styles.lang_box} href={javascript}>
          javascript
        </a>
        <span className={styles.lang_box}>axios</span>
      </div>

      <div className={styles.a}>
        <Button
          style={{
            color: "white",
            backgroundColor: "#262626",
            border: "none",
            borderRadius: 8,
            padding: 5,
          }}
          href="https://adiflix.netlify.app/"
        >
          View Demo
        </Button>
      </div>

      {/* Notes app */}
      <div className={styles.itemcontainer}>
        <div>
          <p className={styles.title}>Notes App</p>
          <p className={styles.content}>
            "This web application serves as a platform for writing and
            organizing personal notes. The notes are conveniently stored in the
            local storage of the user's device. The website offers support for
            Dark mode, providing a comfortable reading experience in low-light
            environments. Additionally, users can easily search through their
            notes for quick access to specific information. Click the button
            below to start creating your own notes."
          </p>
        </div>
      </div>

      <div className={styles.gitcontainer}>
        <a className={styles.lang_box} href={react}>
          react js
        </a>
        <a className={styles.lang_box} href={javascript}>
          javascript
        </a>
      </div>

      <div className={styles.a}>
        <Button
          style={{
            color: "white",
            backgroundColor: "#262626",
            border: "none",
            borderRadius: 8,
            padding: 5,
          }}
          href="https://notezze.netlify.app/"
        >
          View Demo
        </Button>
      </div>

      {/* Todo app */}
      <div className={styles.itemcontainer}>
        <div>
          <p className={styles.title}>Todo App </p>
          <p className={styles.content}>
            "The Basic Todo App serves as a handy tool for jotting down daily
            tasks. Users can effortlessly mark completed tasks on time and
            remove them as needed. This fully responsive app delivers an
            enhanced user experience, adapting seamlessly to different screen
            sizes and ensuring optimal usability."
          </p>
        </div>
      </div>

      <div className={styles.gitcontainer}>
        <a className={styles.lang_box} href={react}>
          react js
        </a>
        <a className={styles.lang_box} href={javascript}>
          javascript
        </a>
        <span className={styles.lang_box}>local storage</span>
      </div>

      <div className={styles.a}>
        <Button
          style={{
            color: "white",
            backgroundColor: "#262626",
            border: "none",
            borderRadius: 8,
            padding: 5,
          }}
          href="https://todo-app-adithyan.netlify.app/"
        >
          View Demo
        </Button>
      </div>

      {/* Covid -19 tracker */}
      <div className={styles.itemcontainer}>
        <div>
          <p className={styles.title}>Covid-19 Live Tracker</p>
          <p className={styles.content}>
            "Our application provides live updates on COVID-19, allowing users
            to filter information by specific countries as well as view global
            details. To enhance data visualization, we integrated two types of
            chart UI: bar charts and line charts. These charts enable users to
            grasp information more effectively and make informed decisions. The
            app ensures real-time and reliable information, as we collect data
            through API consumption."
          </p>
        </div>
      </div>

      <div className={styles.gitcontainer}>
        <a className={styles.lang_box} href={react}>
          react js
        </a>
        <a className={styles.lang_box} href={javascript}>
          javascript
        </a>
        <span className={styles.lang_box}>Axios</span>
      </div>

      <div className={styles.a}>
        <Button
          style={{
            color: "white",
            backgroundColor: "#262626",
            border: "none",
            borderRadius: 8,
            padding: 5,
          }}
          href="https://adithyan-covid-19-tracker.netlify.app/"
        >
          View Demo
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: 20,
        }}
      >
        <a
          style={{
            color: "black",
            backgroundColor: "white",
            border: "none",
            fontSize: 18,
          }}
          href="https://github.com/AdithyanKP/"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default Projects;

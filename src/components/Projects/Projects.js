import React from "react";

import styles from "./Projects.module.css";
import { Button } from "react-bootstrap";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>

      {/*    E-plant project */}
      <div className={styles.imagecontainer}>
        <div>
          <p className={styles.title}>E-Plant</p>

          <p className={styles.content}>
            E-Plant is one of my memorable project. First full stack project in
            my career. Iam really feeling stressed when doing this project
            because everything will new for me. But i decided to never give up
            at any cost. So i completed this project nicely. After completion i
            enjoyed the achivement and i got a lot of confidence to face new
            challenges.
            <br />
            Node js, Express js, HTML, CSS, HBS, MYSQL are the mainly used tech
            stack in this project. E-PLant is an ecommerce application users can
            buy indoor plants and pots online, Admin can access the product
            details, order details, user details, order manegement and so on. In
            this application offered better security help of NPM packages.
          </p>
        </div>
        <div className={styles.a}>
          <Button
            /* variant="info" */
            style={{
              color: "white",
              backgroundColor: "#03242b",
              border: "none",
            }}
            href="https://github.com/AdithyanKP/E-PLANT.git"
          >
            View Github repo
          </Button>
        </div>
      </div>

      {/* covid -19 Tracker */}
      <div className={styles.imagecontainer}>
        <p className={styles.title}>C-Share</p>
        <p className={styles.content}>
          C-Share is my second full stack project. C-share is a social media app
          that offers user can post content, likes, delete the post. Mainly
          C-Share offers google authentication for users and I used JWT for
          working great my authentication. In this project i completed full
          authentication process with forgot and reset password using email
          verification. I managed state using REDUX JS
          <br />
          React js , Redux js,MUI, Node js, Express Js, Mongoose are the main
          tech stack of this project.
        </p>

        <div className={styles.a}>
          <Button
            style={{
              color: "white",
              backgroundColor: "#03242b",
              border: "none",
            }}
            href="https://github.com/AdithyanKP/C-Share-MERN.git"
          >
            View Github repo
          </Button>
        </div>
      </div>

      {/* Netflix-clone */}
      <div className={styles.imagecontainer}>
        <p className={styles.title}>Netflix clone</p>
        <p className={styles.content}>
          In my free time i watch some series and movies in Netflix. So i
          decided to clone Netflix. It was an awesome journey with React. I am
          really learned a lot from this project React components, State, Prop
          and so on. I managed data through consuming TMDB API, and i used Axios
          for handling API requests. We can watch movie trailers in this app.
        </p>

        <div className={styles.a}>
          <Button
            style={{
              color: "white",
              backgroundColor: "#03242b",
              border: "none",
            }}
            href="https://adiflix.netlify.app/"
          >
            View Demo
          </Button>
        </div>
      </div>

      {/*  Quiz-app */}
      {/*  <div className={styles.imagecontainer}>
        <p className={styles.title}>Quiz-App</p> */}
      {/*   <div>
          <img className={styles.image} src={quiz} alt=""></img>
        </div> */}

      {/*   <div className={styles.a}>
          <Button
            style={{ color: "white", backgroundColor: "black", border: "none" }}
            href="https://quizz-kp.netlify.app/"
          >
            View Demo
          </Button>
        </div>
      </div> */}

      {/* Todo app */}
      <div className={styles.imagecontainer}>
        <p className={styles.title}>Todo App</p>
        <p className={styles.content}>
          First React app . I can add my daily tasks, after completion i can
          mark completed, delete feature also available
        </p>

        <div className={styles.a}>
          <Button
            style={{
              color: "white",
              backgroundColor: "#03242b",
              border: "none",
            }}
            href="https://todo-app-adithyan.netlify.app/"
          >
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

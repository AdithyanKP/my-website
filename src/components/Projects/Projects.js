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
            E-Plant is an ecommerce application for users can buy indoor plants
            and pots Both online and offline, Admin can access the product
            details, order details, user details, order manegement and so on. In
            this application offered better security help of Bcrypt library.
            <br /> E-Plant is one of my memorable projects I was done. First
            full stack project in my career. Iam really feeling stressed when I
            was doing this project because everything will new for me. But I
            decided to never give up at any cost. So I completed this project
            nicely. After completion I enjoyed the achivement and I got a lot of
            confidence to face new challenges.
            <br />
            Node js, Express js, HTML, CSS, HBS, MYSQL are the mainly used tech
            stack in this project..
          </p>

          <div className={styles.gitcontainer}>
            <a className={styles.langgit} href={nodejs}>
              node js
            </a>
            <a className={styles.langgit} href={mysql}>
              mySql
            </a>
            <a className={styles.langgit} href={javascript}>
              javascript
            </a>
            <span className={styles.langgit}>express js</span>
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
            Logus is my second full stack project. Logus is a social media app
            that offers user can post content, likes, delete the post. Mainly
            Logus offers google authentication for users and I used JWT for
            working great my authentication. In this project I completed full
            authentication process with forgot and reset password using email
            verification. I managed state using REDUX JS
            <br />
            React js , Redux js,MUI, Node js, Express Js, Mongoose are the main
            tech stack of this project.
          </p>

          <div className={styles.gitcontainer}>
            <a className={styles.langgit} href={nodejs}>
              node js
            </a>
            <a className={styles.langgit} href={react}>
              react js
            </a>
            <span className={styles.langgit}>express js</span>
            <a className={styles.langgit} href={mongoose}>
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
            In my free time I watch some series and movies in Netflix. So I
            decided to clone Netflix. It was an awesome journey with React. I am
            really learned a lot from this project React components, State, Prop
            and so on. I managed data through consuming TMDB API, and I used
            Axios for handling API requests. We can watch movie trailers in this
            app.
          </p>
        </div>
      </div>

      <div className={styles.gitcontainer}>
        <a className={styles.langgit} href={react}>
          react js
        </a>
        <a className={styles.langgit} href={javascript}>
          javascript
        </a>
        <span className={styles.langgit}>axios</span>
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
            web application to write down my notes. I store my notes in Local
            storage. In this website supportes Dark mode and We can search our
            notes. Click the below button and create your own notes.
          </p>
        </div>
      </div>

      <div className={styles.gitcontainer}>
        <a className={styles.langgit} href={react}>
          react js
        </a>
        <a className={styles.langgit} href={javascript}>
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
            Basic Todo App, it was used to write daily todo tasks. we can mark
            completed todo ontime and also we can remove. this app fully
            responsive and deliver better user experience.
          </p>
        </div>
      </div>

      <div className={styles.gitcontainer}>
        <a className={styles.langgit} href={react}>
          react js
        </a>
        <a className={styles.langgit} href={javascript}>
          javascript
        </a>
        <span className={styles.langgit}>local storage</span>
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
            We can refer the covid-19 live updates with filter by specific
            countries also the global Details. I integrated the chart to View
            the information more effectivly. I used two different types of chart
            ui one of them is barChart and the otherone is Line chart. this app
            will provide realtime solid information to the end user. I collected
            the data via api consumption.
          </p>
        </div>
      </div>

      <div className={styles.gitcontainer}>
        <a className={styles.langgit} href={react}>
          react js
        </a>
        <a className={styles.langgit} href={javascript}>
          javascript
        </a>
        <span className={styles.langgit}>Axios</span>
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

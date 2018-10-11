import React from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";

import "./card_back.css";
import careBy from "../../assets/images/careby.gif";
import ctaDash from "../../assets/images/ctadash.gif";
import mocpMe from "../../assets/images/mocpme.png";

const cardBacks = {
  project1: {
    image: mocpMe,
    site: "https://mocp.herokuapp.com",
    github: "https://github.com/mkdoh3/mocp_me",
    tools: "mySQL, Express, React, Node"
  },
  project2: {
    image: careBy,
    site: "https://care-by-numbers.herokuapp.com",
    github: "https://github.com/mkdoh3/care-by-numbers",
    tools: "Javascript, Node, Express, mySQL, CSS Grid"
  },
  project3: {
    image: ctaDash,
    site: "https://mkdoh3.github.io/CTA_Dash/login",
    github: "https://github.com/mkdoh3/CTA_Dash",
    tools: "Javascript, Firebase, Bootstrap."
  },
  project4: {
    image: "",
    site: "https://crud-burgers.herokuapp.com/",
    github: "https://github.com/mkdoh3/burger-sequel",
    tools: "mySql, Sequelize, Node, Express, Bootstrap."
  },
  project5: {
    image: "",
    site: "",
    github: "https://github.com/mkdoh3/bamazon",
    tools: "Javascript, Node, Inquirer."
  },
  project6: {
    image: "",
    site: "",
    github: "https://github.com/mkdoh3/liri-node-app",
    tools: "Javascript, Node, Spotify API, Twitter API."
  },
  project7: {
    image: "",
    site: "https://mkdoh3.github.io/Hangman-Game/",
    github: "https://github.com/mkdoh3/Hangman-Game",
    tools: "Javacript, JQuery, HTML, CSS."
  }
};

const cardBack = props => {
  const { image, site, github, tools } = cardBacks[props.project];
  return (
    <div className="card-back">
      <ReactTransitionGroup
        transitionName="text"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnterTimeout={2000}
        transitionLeaveTimeout={2000}
      >
        <div className="back-text">
          {site && (
            <p>
              Site:{" "}
              <a href={site} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </p>
          )}
          <p>
            Repo:{" "}
            <a href={github} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </p>
          <p>Built with: {tools}</p>
        </div>
      </ReactTransitionGroup>
      <ReactTransitionGroup
        transitionName="image"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnterTimeout={2000}
        transitionLeaveTimeout={2000}
      >
        {image && <img src={image} alt="project" />}
      </ReactTransitionGroup>
    </div>
  );
};

export default cardBack;

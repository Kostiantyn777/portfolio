import React from "react";
import Project from "./Project";

const projectArray = [
{
    name: "Face Recognition",
    description:
      "This app detects faces in pictures using Clarifai's AI API. It also has a register/signin system and a basic profile that counts and displays user submissions.",
    image: "/screenshots/facerecognition.jpg",
    frontLink: "https://github.com/Kostiantyn777/smart-brain-kos",
    backLink: "https://github.com/Kostiantyn777/smart-brain-kos",
    appLink: "https://smart-brain-kos.herokuapp.com",
    tags: ["ES6", "React", "Node.js", "Express", "PostgreSQL"]
  },
  {
    name: "Robofriends",
    description:
      "This is a React App for searching robots.",
    image: "/screenshots/robofriends.jpg",
    frontLink: "https://github.com/Kostiantyn777/robofriends",
    backLink: "",
    appLink: "https://kostiantyn777.github.io/robofriends/",
    tags: [
      "ES6",
      "React",
      "Redux",
      "API",
      "JSON",
      ]
  },
    {
    name: "Star Wars",
    description:
      "Small Project using the SWAPI.",
    image: "/screenshots/starwars.jpg",
    frontLink: "https://github.com/Kostiantyn777/react-starwars",
    backLink: "",
    appLink: "https://kostiantyn777.github.io/react-starwars/",
    tags: [
      "ES6",
      "React",
      "API",
      "JSON",
      ]
  }
 ];

const ProjectList = () => {
  return (
    <div>
      {projectArray.map((project, i) => {
        return (
          <Project
            key={i}
            name={projectArray[i].name}
            description={projectArray[i].description}
            image={projectArray[i].image}
            frontLink={projectArray[i].frontLink}
            backLink={projectArray[i].backLink}
            appLink={projectArray[i].appLink}
            tags={projectArray[i].tags}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;

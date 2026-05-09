/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import desktopImage from "../images/design-desk.jpeg"; // Ensure this path is correct based on your project structure
/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */


const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Events Hosted as Microsoft Student Ambassador",
    description:
      "Hosted events at Microsoft Gurugram Office and 8+ online events.",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/1a38faec-493b-4cbb-8ddb-9fdc60944cc2",
    url: "https://cdn.corenexis.com/files/c/2568346720.png"
  },
  {
    title: "MS Learn Trophies and Badges",
    description:
    "MS Learn Badges And Trophies earned by me for completing various learning paths and modules on Microsoft Learn.",
    url: "https://learn.microsoft.com/en-us/users/me/achievements#badges-section",
  },
  {
    title: "My Resume Site",
    description:
      "Check my resume site to know more about my education, experience, projects and achievements.",
    url: "https://www.image2url.com/r2/default/documents/1778300799498-16e85bd3-ce6f-4a86-8a8d-26aa86a27617.pdf",
  },
  {
    title: "Projects",
    description:
      "Check out my GitHub profile to see the projects I have worked on and contributed to.",
    url: "https://github.com/Aaradhya0408",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio"style={{ backgroundColor: "black" }}>
      <h2 className="About"style={{textAlign:"center"}}>PORTFOLIO</h2>
      <div className="portfolio-container">
        
          
       
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
           <span className="view-project">click →</span>   </a>
              <p className="small">{project.description}</p>
            </div>
          ))}

        </div>
        <div className="image-side">
          <img src={desktopImage} alt="Desktop Setup" className="portfolio-image" />
        </div>
       
        </div>
       
    </section>
  );
};

export default Portfolio;

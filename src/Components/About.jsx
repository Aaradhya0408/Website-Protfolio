import React from "react";

const description = "Final-year Computer Science student at ABES Engineering College, specializing in AI & ML. As a Microsoft Learn Student Ambassador, I have successfully spearheaded 9+ technical events, fostering a community of learners both online and in-person. I combine my leadership experience with a deep passion for Full-Stack Web Development to build impactful digital solutions.";

const skillsList = [
  "Programming: C++, Python",
  "Web: HTML, CSS, JavaScript, ReactJS",
  "Backend: NodeJS, ExpressJS, MongoDB",
  "Events Hosted: 9+ ", 
];

const detailOrQuote = "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Full-Stack Web Development experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about" style={{ backgroundColor: "black" }}>
      <div className="about-container">
        <h1 className="About">ABOUT MYSELF</h1>
       

        <p className="large-desc">{description}</p>
        
        <hr className="gradient-hr" />
        
        <ul className="skills-grid">
          {skillsList.map((skill) => (
            <li key={skill} className="skill-item">{skill}</li>
          ))}
        </ul>
        
        <hr className="gradient-hr" />
        
       
      </div>
    </section>
  );
};

export default About;
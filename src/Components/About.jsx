import React from "react";

const description =
  "I am a Senior Ambassador, GIS Developer, and Full Stack Developer with a strong interest in building impactful digital and geospatial solutions. I began my journey as a 6-month intern at Geocyber Systems LLC in August and have continued growing through hands-on learning, technical problem-solving, and leadership.";

const skillsList = [
  "Programming: C++, Python",
  "Web: HTML, CSS, JavaScript, ReactJS",
  "GIS: GIS Development, Spatial Analysis",
  "Backend: NodeJS, ExpressJS, MongoDB",
  "Leadership: Senior Ambassador & Microsoft Learn Student Ambassador",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my full-stack development and GIS experience, I continually look for new and better ways to create meaningful technology solutions.";

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

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Ensure profilePic path is correct based on your project structure
import profilePic from "../images/aaradhya.png"; 

const Home = ({ name }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  // Speed ko tez karne ke liye initial speed 100ms rakhi hai
  const [typingSpeed, setTypingSpeed] = useState(100); 

  const roles = [
    "Microsoft Student Ambassador",
    "Full Stack Developer",
    "Aspiring Software Engineer",
    "Chess Player",
    "Web Developer at TSN Security's"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      // Tez typing ke liye: Typing speed 70ms aur Deleting speed 40ms
      setTypingSpeed(isDeleting ? 40 : 70); 

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // 1.5 sec pause after finishing typing
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-area">
          
          <h2 className="main-name">Hi! I am</h2> 
          <h2 className="main-name">{name}</h2>
          
          <div className="animated-role-container">
            <span className="animated-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
        </div>
        <div className="image-area">
          <img className="profile-photo" src={profilePic} alt={name} />
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
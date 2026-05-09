/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        background: "black",
        padding: "2rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <nav>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#footer">CONTACT</a>
      </nav>
    </div>
  );
};

export default Header;

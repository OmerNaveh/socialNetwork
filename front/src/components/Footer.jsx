import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="creatorDet">
        <p>Omer Naveh</p>
        <div className="creatorLinks">
          <a href="https://github.com/OmerNaveh">
            <i className="fab fa-github-square gitLogo"></i>
          </a>
          <a href="https://www.linkedin.com/in/omer-naveh/">
            <i className="fab fa-linkedin gitLogo"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

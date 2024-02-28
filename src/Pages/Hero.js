import React from "react";
import sideImage from "../assets/2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hc-main">
        <h2>
          Transforming Enterprises with cutting-edge, scalable, privacy-focused{" "}
          <span>Generative AI</span> Solutions
        </h2>
        <div>
          <p>
            Founded in 2017, Bluetick Consultants is a technology-driven firm
            that has made a significant impact in the Indian and US startup
            ecosystems.
          </p>
          <Link
            to="https://www.bluetickconsultants.com/generative-ai.html"
            className="btnLink"
          >
            To Know More About Us →
          </Link>
        </div>
      </div>
      <div className="hc-img">
        <img src={sideImage} alt="sideImage" />
      </div>
    </div>
  );
};

export default Hero;

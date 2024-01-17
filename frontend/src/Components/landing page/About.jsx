import React from "react";
import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/service-1013724_1280-removebg-preview.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import './all.css';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Unlocking Consumer Empowerment
        </h1>
        <p className="primary-text">
        a revolutionary platform designed to amplify your voice as a consumer. 
        We simplify the complaint resolution process, ensuring transparency, speed, and results.
        </p>
        <p className="primary-text">
        From registering concerns to experiencing swift resolutions, we're your trusted partner in advocating for fair and accountable consumer experiences. 
        Explore how your feedback becomes a catalyst for positive change. Your concerns matter—let's create a better marketplace together.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

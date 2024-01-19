import React from "react";
import BannerBackground from "../../assets/home-banner-background.png";
import BannerImage from "../../assets/bg.png";
import './all.css'

import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading" >
  Your Voice,
</h1>
            <h1 className="primary-heading"> Our Solution!
          </h1>
          <p className="primary-text">
          Where your concerns meet swift resolutions — a platform 
          dedicated to transforming your feedback into actionable solutions, ensuring your voice shapes a better consumer experience.
          </p>
          <Link to ='/docs'>
          <button className="secondary-button">
          File a Complaint<FiArrowRight />{" "}
            </button>
            </Link>
        </div>
        <div className="home-image-section">
  <img src={BannerImage} alt="" style={{ width: '70%', top:'0px' }} />
</div>

      </div>
    </div>
  );
};

export default Home;

// Blog.jsx

import React from 'react';
import './Blog.css';
import image2 from "../../assets/customer-service-1433641_1280.png";
import image1 from '../../assets/1st.jpeg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpeg'
import image5 from '../../assets/5.png'
import image6 from '../../assets/6.png'
// Import other images...

const cardData = [
    {
        id: 1,
        imageSrc: image1,
        header: "Empowering Consumers in the Digital Age",
        content: "In today's fast-paced digital world, consumers have more choices than ever before. However, with great choices come great responsibilities. This blog discusses how our consumer complaint system empowers individuals to voice their concerns, seek resolutions, and ensure their rights are protected in the digital marketplace.",
        buttonText: "Read more"
      },
      {
        id: 2,
        imageSrc: image2,
        header: "Know Your Rights: A Consumer's Guide",
        content: "Understanding your rights as a consumer is crucial in making informed decisions. This blog provides a comprehensive guide to consumer rights, shedding light on common issues faced by consumers and how our complaint system acts as a reliable ally in protecting those rights Read more...",
        buttonText: "Read more"
      },
      {
        id: 3,
        imageSrc: image3,
        header: "Resolving Disputes: The Power of Consumer Feedback",
        content: "Consumer feedback is a powerful tool that can drive positive change. This blog explores real-life stories of consumers using our complaint system to resolve disputes with businesses, emphasizing the impact of constructive feedback in shaping better consumer experiences.",
        buttonText: "Read more"
      },
      {
        id: 4,
        imageSrc: image4,
        header: "Spotlight on Consumer Protection Laws",
        content: "Navigating the legal landscape can be daunting for consumers. In this blog, we break down key consumer protection laws, offering insights into how our system aligns with these regulations to provide a secure and trustworthy platform for raising concerns.",
        buttonText: "Read more"
      },
      {
        id: 5,
        imageSrc: image5,
        header: "The Rise of E-Commerce: Consumer Challenges and Solutions",
        content: "As e-commerce continues to thrive, so do the challenges faced by online shoppers. This blog addresses common issues encountered in the realm of online shopping and how our complaint system serves as a reliable mechanism to address and rectify these challenges.",
        buttonText: "Read more"
      },
      {
        id: 6,
        imageSrc: image6,
        header: "Community Voices: Success Stories and Learnings",
        content: "Nothing speaks louder than success stories. Our final blog showcases real success stories from consumers who used our system to resolve their complaints. From timely resolutions to lessons learned, this blog paints a vivid picture of the positive impact our platform has on the consumer community.",
        buttonText: "Read more"
      },
];

const Blog = () => {
  return (
    <div>
      <h1 className="blog-header">BLOGS</h1>
      <div className="card-container">
        {cardData.map(card => (
          <div className="cardu" key={card.id}>
            <div className="card-image-container">
              <img src={card.imageSrc} alt="Card Image" className="card-image" />
            </div>
            <div className="card-text-container">
              <h2 className="card-header">{card.header}</h2>
              <div className="card-content">
                <p>{card.content}</p>
              </div>
              <div className="card-button-container">
                <button className="card-button">{card.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

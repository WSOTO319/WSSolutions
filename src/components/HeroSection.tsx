import React from "react";
import "../App.css";
import { Button } from "./Button";
//import "./HeroSection.css";
import "./Cards.css";
import CardItem from "./CardItem";

function HeroSection() {
  return (
    <div className="Overall">
      <div className="Attempt1">
        <h1 className="words">
          Want Your Best Possible Refund? We Got Your Back!
        </h1>
        <p>
          Our team of veteran economists will help you with any situation you're
          in!
        </p>
      </div>
    </div>
    /*<CardItem
      src="images/img-9.jpg"
      text="Explore The Hidden Waterfall
              Deep Inside The Amazon Jungle"
      label="Adventure"
      path="/services"
    />*/
  );
}

export default HeroSection;

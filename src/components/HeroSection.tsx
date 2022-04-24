import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import "./Cards.css";
import CardItem from "./CardItem";

function HeroSection() {
  return (
    <CardItem
      src="Images/img-1.jpg"
      text="Explore The Hidden Waterfall
              Deep Inside The Amazon Jungle"
      label="Adventure"
      path="/services"
    />
  );
}

export default HeroSection;

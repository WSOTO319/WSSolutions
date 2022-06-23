import React from "react";
import "../App.css";
import { Button } from "./Button";
//import "./HeroSection.css";
import "./Cards.css";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="HeroSectionContainer">
      <div className="headline">
        <h1>Want The Best Possible Outcome? We Got Your Back!</h1>
        <p>
          Our Team Of Veteran Economists Will Help You With Any Situation You're
          In!
        </p>
      </div>
      <div className="cards">
        <div className="card__container">
          <div className="cards__wrapper">
            <div className="cards__items">
              <CardItem
                src="images/crushtaxes.jpg"
                text="Get The Best Refund For Your Situation!"
                path="/appointments"
              />
              <CardItem
                src="images/teamwork.jpg"
                text="Need Help With Your Credit? Let's Work on That!"
                path="/appointments"
              />
              <CardItem
                src="images/TaxTime.jpg"
                text="Want to Work With Us? Here's How"
                path="/appointments"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

/*<div className="cards">
  <div className="card__container">
    <div className="cards__wrapper">
      <ul className="cards__items">
        <CardItem
          src="images/img-9.jpg"
          text="Get The Best Refund For Your Situation!"
          path="/services"
        />
        <CardItem
          src="images/img-2.jpg"
          text="Need Help With Your Credit? Let's Work on That!"
          path="/services"
        />
        <CardItem
          src="images/img-4.jpg"
          text="Want to Work With Us? Here's How"
          path="/products"
        />
      </ul>
    </div>
  </div>
</div>;


<Link className="TSL" to="/Appointments">
            <h1>
              Allow Us To Help You File Your Taxes! Business or Personal!
              <h2>
                We will assure you the best possible refund for your situation.
                Make your appointment now!
              </h2>
            </h1>
          </Link>



 <div className="CreditService">
          <Link className="CSL" to="/Appointments">
            <h1>
              Let's work together to get your Credit Score in top condition!
            </h1>
          </Link>
</div>



*/

import React from "react";
import "../../App.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1>Services</h1>
      <h2>Tax Preparation</h2>
      <h3>
        We prepare your taxes for you so you can get the best refund possible!{" "}
      </h3>
      <h2>Credit Recovery/Building</h2>
      <h3>
        We help you with your credit. Whether you want to start building your
        credit or boost the credit you already have, we will help you!
      </h3>
      <h2>Mortgage Consultation</h2>
      <h3>We consult with you about your loans.</h3>
      <h2>Tax Training</h2>
      <h3>
        We have classes in taxes and if you want to work with us, you can get
        the classes for free!
      </h3>
    </div>
  );
}

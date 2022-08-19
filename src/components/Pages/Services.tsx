import React from "react";
import "../../App.css";
import { useEffect } from "react";
import "C:/Users/Will/Documents/ReactProjects/wssolutions/src/components/Pages/Services.css";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ServicesContainer">
      <h1>Our Services</h1>
      <ul className="ListOS">
        <h2>A.Tax Preparation</h2>
        <h3>
          We prepare your taxes for you so you can lessen the amount that you
          will owe or get the best refund possible!
        </h3>
        <h3>
          What You Need: Proof of Income (W2s,1099s, etc), ID (Driver's License,
          Permit, etc.), Physical SSN, Birth Certificate and School/Medical
          Records of Dependent(s)
        </h3>
        <h2>B.Credit Building/Recovery</h2>
        <h3>
          We help you with your credit. Whether you want to start building your
          credit or boost the credit you already have, we will help you!
        </h3>
        <h3>
          What You Need: Physical ID/SSN and all imformation regarding your
          credit.
        </h3>
        <h2>C.Mortgage/Loan Consultation</h2>
        <h3>We consult with you about your loans.</h3>
        <h3>
          What You Need: All the information on your loans and physical ID/SSN.
        </h3>
        <h2>D.Tax Training</h2>
        <h3>
          From October to December we have classes to train you in tax
          preperation and if you work with us for a year after that, you get the
          classes for free!
        </h3>
      </ul>
    </div>
  );
}

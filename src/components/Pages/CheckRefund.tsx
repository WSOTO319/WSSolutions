import React from "react";
import "../../App.css";
import { useEffect } from "react";

export default function CheckRefund() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="checkrefund">
        So you'd like to check on your refund? Great! It's simple and easy!
      </h1>
      <h2>If you would like to check on your federal refund: </h2>
      <ol>
        <h3>1. Click on the following link: www.life.com</h3>
        <h3>
          2. Fill out the form on the page. You will need your social security
          number, filing status(ex. single or head of household), refund
          amount(found on 1040), and the tax year.
        </h3>
        <h3>3. It will tell you the status of your refund. </h3>
      </ol>
      <h2>If you would like to check on your state refund: </h2>
      <ol>
        <h3>1. Click on the following link: www.life.com</h3>
        <h3>2. Click on "check my refund" and do the security question.</h3>
        <h3>
          3. Fill out the form on the following page. You will need your social
          security number, tax year, refund amount and pick which form you
          filed.
        </h3>
        <h3>4. It will tell you the status of your refund. </h3>
      </ol>
    </div>
  );
}

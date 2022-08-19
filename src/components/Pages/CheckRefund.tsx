import React from "react";
import "../../App.css";
import { useEffect } from "react";
import "C:/Users/Will/Documents/ReactProjects/wssolutions/src/components/Pages/CheckRefund.css";

export default function CheckRefund() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="checkrefund">
      <h1 className="One">So You'd Like To Check On Your Refund?</h1>
      <h1 className="Two">Great! It's Simple And Easy!</h1>
      <h2>A. If You Would Like To Check On Your Federal Refund: </h2>
      <ol>
        <h3>
          1. Click on the following link: &nbsp;
          <a
            className="link"
            href="https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp"
            target="_blank"
          >
            Federal Refund
          </a>
        </h3>
        <h3>
          2. Fill out the form on the page. You will need your social security
          number, filing status(ex. single or head of household), refund
          amount(found on 1040), and the tax year.
        </h3>
        <h3>3. It will tell you the status of your refund. </h3>
      </ol>
      <h2>B. If You Would Like To Check On Your State Refund: </h2>
      <ol>
        <h3>
          1. Click on the following link: &nbsp;
          <a
            className="link"
            href="https://www.tax.ny.gov/pit/file/refund.htm"
            target="_blank"
          >
            State Refund
          </a>
        </h3>
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

import React from "react";
import "../../App.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <h1>About Us</h1>
      <h2>
        WSSolutions is dedicated wholeheartedly to achieving the goal of
        satisfying our everyday clients with the best finance assistance there
        is. We want to impact the world positively by helping our hardworking
        clients in their journey with finance, whether it be taxes , loan
        modifications or even credit recovery . We do this and many more. We
        know that sometimes in life you could use some help when trying to
        achieving certain goals and we are here for you.{" "}
      </h2>
      <h2>
        Goals: Satisfy Our Customers, Impact the world in a positive way by
        assisting people with their finances and helping them achieve their
        finance goals
      </h2>
      <h2>
        Services : Taxes, Mortgage Consultations, Financial Advisement, Loan
        Modifications, Credit Recovery Assistance
      </h2>
    </div>
  );
}

import React from "react";
import "../../App.css";
import { useEffect } from "react";
import "C:/Users/Will/Documents/ReactProjects/wssolutions/src/components/Pages/AboutUs.css";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="About">
      <h1>About Us</h1>
      <h2>
        WSSolutions is dedicated wholeheartedly to achieving the goal of
        satisfying our everyday clients with the best finance assistance there
        is. We want to impact the world positively by helping our hardworking
        clients in their journey with finance. Whether it be taxes , loan
        modifications or even credit recovery, we got your back! We do all this
        and much more. We are aware that sometimes in life you could use some
        assistance when trying to achieve certain goals and we are here for you.
        Let our veteran team guide the way!
      </h2>
    </div>
  );
}

/*<h2>
  Services : Taxes, Mortgage Consultations, Financial Advisement, Loan
  Modifications, Credit Recovery Assistance
</h2>;*/

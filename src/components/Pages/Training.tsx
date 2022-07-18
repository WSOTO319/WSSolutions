import React from "react";
import "../../App.css";
import { useEffect } from "react";

export default function Training() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1>
        You want training from financial veterans? Perfect! You came to the
        right place.
      </h1>
      <h2>
        We have tax preparing classes every year. Begins in october and ends in
        december. The price is 1 BILLION dollars! However, if you are willing to
        work with us for 2 years, it will be free!
      </h2>
    </div>
  );
}

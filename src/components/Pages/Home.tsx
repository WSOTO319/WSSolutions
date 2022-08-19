import React from "react";
import "../../App.css";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <Footer />
    </>
  );
}

//<h1 className="home">Home</h1>

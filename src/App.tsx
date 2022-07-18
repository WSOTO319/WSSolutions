import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Reviews from "./components/Pages/Reviews";
import SignUp from "./components/Pages/SignUp";
import About from "./components/Pages/About";
import CheckRefund from "./components/Pages/CheckRefund";
import Appointment from "./components/Pages/Appointment";
import Footer from "./components/Footer";
import Training from "./components/Pages/Training";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/Services" element={<Services></Services>} />
          <Route path="/Reviews" element={<Reviews></Reviews>} />
          <Route path="/Sign-up" element={<SignUp></SignUp>} />
          <Route path="/CheckRefund" element={<CheckRefund></CheckRefund>} />
          <Route path="/Appointments" element={<Appointment></Appointment>} />
          <Route path="/About" element={<About></About>} />
          <Route path="/Training" element={<Training></Training>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

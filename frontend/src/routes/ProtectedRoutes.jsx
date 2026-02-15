import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import CollegeResults from "../pages/CollegeResults";
import Results from "../pages/Results";
import AskAI from "../pages/AskAi";
import About from "../pages/About";
import Contact from "../pages/Contact";

function ProtectedRoutes() {
  return (
    <>
    <Navbar />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/predictor" element={<CollegeResults />} />
        <Route path="/results" element={<Results />} />
        <Route path="/ask-ai" element={<AskAI />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default ProtectedRoutes;

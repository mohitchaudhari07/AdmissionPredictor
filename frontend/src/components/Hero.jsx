import React from "react";
import hero from "../assets/images/counselling.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handlePredictClick = () => {
    navigate("/predictor");
  };

  const handleAskCounselorClick = () => {
    navigate("/ask-ai");
  };
  return (
    <div>
      <div className="w-full flex space-x-10 justify-between pt-20  text-white">
        <div className="pl-8 ">
          <h1 className="hero-title text-[3rem] text-orange-800 font-extrabold">
            Predict Your Engineering College
          </h1>
          <h1 className="hero-title text-[2.5rem] font-extrabold">
            Admission with AI Accuracy
          </h1>

          <p className="hero-description pt-2.5 text-[2rem] font-bold">
            Analyze previous years’ cutoffs and discover
          </p>
          <p className="hero-description text-2xl font-bold">
            admission chances in top engineering colleges — instantly.
          </p>
          <div className="hero-description pt-8 text-md ">
            <p className="text-orange-800">
              Our AI-powered admission predictor
            </p>
            <p>
              evaluates your rank, category, quota, and branch preference using
            </p>
            <p>
              historical cutoff data to provide accurate college predictions,
              probability scores, and counseling insights.
            </p>
          </div>
          <div className="pt-6 flex space-x-4">
            <button
              onClick={handlePredictClick}
              className="bg-[#e5cec1] transition-all ease-in-out  hover:bg-orange-300 hover:text-amber-50 text-yellow-900  py-2 px-4 rounded-full cursor-pointer"
            >
              Predict My Admission
            </button>
            <button
              onClick={handleAskCounselorClick}
              className="bg-[#e5cec1] transition-all ease-in-out  hover:bg-orange-300 hover:text-amber-50 text-yellow-900  py-2 px-4 rounded-full cursor-pointer"
            >
              Ask A Counselor
            </button>
          </div>
        </div>
        <div className="mr-6">
          <img
            className="hero-image rounded-full w-96 shadow-lg border border-[#090909]"
            src={hero}
            alt="Admission Predictor"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import logo from "../assets/images/addmisionPredictorLogo.png";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const toggleLogin = () => {
    navigate("/login");
  };

  const toggleHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full bg-linear-to-br from-[#e6d3b3] via-[#e3d0af] to-[#dfbe86] overflow-hidden border-b-2 border-[#ed9a48]">
      <div className="flex   justify-between items-center p-2   ">
        <img className="w-24 p-2 " src={logo} alt="Addmision Predictor" />
        <div className="flex space-x-4 text-yellow-900 bg-[#e5cec1]  rounded-s-3xl ">
          <a
            onClick={toggleHome}
            href="/"
            className="transition-all rounded-s-3xl ease-in-out p-2 hover:bg-orange-300 hover:text-amber-50"
          >
            Home
          </a>
          <a
            href="/about"
            className=" transition-all ease-in-out  hover:bg-orange-300 hover:text-amber-50 p-2"
          >
            About
          </a>
          <a
            href="/contact"
            className=" transition-all ease-in-out  hover:bg-orange-300 hover:text-amber-50 p-2"
          >
            Contact
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              toggleLogin();
            }}
            href="/"
            className=" transition-all ease-in-out  hover:bg-orange-300 hover:text-amber-50 p-2"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

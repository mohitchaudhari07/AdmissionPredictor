import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        { withCredentials: true },
      );
      console.log("Login successful:", response.data);
      navigate("/predictor");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen bg-linear-to-br from-[#e6d3b3] via-[#d2b48c] to-[#a67c52] flex justify-center items-center">
      <div className="auth-container bg-[#e5cec1] p-12 rounded-lg shadow-md w-full max-w-md">
        <div className="auth-header mb-8  ">
          <h1 className="auth-title text-2xl mr-2">Welcome back</h1>
          <p className="auth-sub text-md m-0">
            Sign in to continue to your account.
          </p>
        </div>
        <form className="flex flex-col gap-3 mt-3.5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm ">Email</label>
            <input
              className="w-full p-2 border border-orange-900 rounded-md"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm ">Password</label>
            <input
              className="w-full p-2 border border-orange-900 rounded-md"
              type="password"
              name="password"
              placeholder="Your password"
            />
          </div>
          <button className="bg-[#EFBF04] transition-all ease-in-out  hover:bg-orange-300 hover:text-amber-50 text-yellow-900  py-2 px-4 rounded-full cursor-pointer">
            Sign in
          </button>
        </form>
        <p className="muted mt-1.5 text-sm">
          New here? <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

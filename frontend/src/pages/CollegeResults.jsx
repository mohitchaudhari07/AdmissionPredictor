import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { predict } from "../services/api"; // Function to call POST /predict

export default function CollegeResults() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [warning, setWarning] = useState(null);

  if (error == "Unauthorizedtokenmissing") {
    setWarning("Session expired. Please log in again.");
    navigate("/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const colleges = await predict(formData); // POST /predict with formData
      navigate("/results", { state: { colleges, formData } });
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Request failed");
    } finally {
      setLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    percentile: "",
    category: "OPEN",
    gender: "Male",
    branches: [],
    state: "All India",
    quota: "Home Quota",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#e6d3b3] via-[#d2b48c] to-[#a67c52] py-6">
      <div className="max-w-4xl mt-6 mx-auto p-6 bg-[#fffaf7] rounded-2xl shadow-lg border border-[#e5cec1]">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#7a543f] mb-6">
          College Admission Predictor
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Percentile */}
          <div>
            <label className="block text-sm mb-1 text-[#7a543f]">
              Enter Your Percentile
            </label>
            <input
              type="number"
              name="percentile"
              value={formData.percentile}
              onChange={handleChange}
              required
              min="0"
              max="100"
              step="0.01"
              className="w-full p-3 border border-[#e5cec1] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="e.g. 98.5"
            />
          </div>

          {/* Category + Gender */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-[#7a543f]">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border border-[#e5cec1] rounded-lg focus:ring-2 focus:ring-orange-300"
              >
                <option>OPEN</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
                <option>EWS</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1 text-[#7a543f]">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border border-[#e5cec1] rounded-lg focus:ring-2 focus:ring-orange-300"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* State + Quota */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-[#7a543f]">Quota</label>
              <select
                name="quota"
                value={formData.quota}
                onChange={handleChange}
                className="w-full p-3 border border-[#e5cec1] rounded-lg focus:ring-2 focus:ring-orange-300"
              >
                <option>Home Quota</option>
                <option>Other than Home Quota</option>
              </select>
            </div>
          </div>

          {/* Branches */}
          <div>
            <label className="block text-sm mb-1 text-[#7a543f]">
              Prefered Branch
            </label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-3 border border-[#e5cec1] rounded-lg focus:ring-2 focus:ring-orange-300"
            >
              <option value="cse">Computer Science Engineering</option>
              <option value="it">Information Technology</option>
              <option value="extc">
                Electronics and Telecommunication Engineering
              </option>
              <option value="mech">Mechanical Engineering</option>
              <option value="civil">Civil Engineering</option>
              <option value="electrical">Electrical Engineering</option>
              <option value="ai">Artificial Intelligence</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#7a543f] text-white rounded-lg hover:bg-[#5e3f30] transition"
          >
            Predict Colleges
          </button>

          <button type="submit" disabled={loading}>
            {loading ? "Predicting…" : "Predict Colleges"}
          </button>
          {warning && <div className="text-red-600 text-lg ">{warning}</div>}
        </form>
      </div>
    </div>
  );
}

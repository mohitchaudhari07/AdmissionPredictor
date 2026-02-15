import React from "react";
import { useLocation } from "react-router-dom";

export default function Results() {
  // Static Demo Data (Frontend Only)

  const location = useLocation();
  const colleges = location.state?.colleges || [];

  const getProbabilityColor = (probability) => {
    switch (probability) {
      case "High":
        return "bg-orange-300 text-[#7a543f] border border-orange-400";
      case "Moderate":
        return "bg-[#e5cec1] text-[#7a543f] border border-[#7a543f]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Page Title */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-[#7a543f]">
          Predicted Colleges
        </h2>
        <p className="text-gray-600">Based on your rank & preferences</p>
      </div>

      {/* College Cards */}
      <div className="space-y-4">
        {colleges.map((college, index) => (
          <div
            key={index}
            className="bg-white border border-[#e5cec1] rounded-xl shadow-md p-5 hover:shadow-lg transition border-l-4 border-l-orange-300"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-lg text-[#7a543f] mb-1">
                  {college.college}
                </h3>

                <p className="text-sm text-gray-600">
                  {college.code}
                </p>
              </div>

              <span className="px-3 py-1 text-xs border border-[#7a543f] text-[#7a543f] rounded-full">
                {college.status}
              </span>
            </div>

            {/* Divider */}
            <hr className="my-3 border-[#e5cec1]" />

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Branch</p>
                <p className="text-[#7a543f]">{college.branch}</p>
              </div>

              <div>
                <p className="text-gray-600">Cutoff Rank</p>
                <p className="text-[#7a543f]">
                  📈 {college.cutoff.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-gray-600">Annual Fees</p>
                <p className="text-[#7a543f]">{college.fees}</p>
              </div>
            </div>

            {/* Probability */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-600">
                Admission Probability
              </span>

              <span
                className={`px-3 py-1 text-xs rounded-full ${getProbabilityColor(
                  college.chance,
                )}`}
              >
                {college.chance}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-[#e5cec1] border border-[#7a543f] rounded-lg">
        <p className="text-sm text-[#7a543f]">
          <strong>Note:</strong> These predictions are based on previous year's
          cutoff trends and may vary. Please refer to official counseling data
          for accurate information.
        </p>
      </div>
    </div>
  );
}

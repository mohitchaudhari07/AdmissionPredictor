import React from "react";

// Main Card Wrapper
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md border ${className}`}
    >
      {children}
    </div>
  );
};

// Card Header
export const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`p-4 border-b ${className}`}>
      {children}
    </div>
  );
};

// Card Title
export const CardTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
};

// Card Description
export const CardDescription = ({ children, className = "" }) => {
  return (
    <p className={`text-sm opacity-90 ${className}`}>
      {children}
    </p>
  );
};

// Card Content
export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

import React from "react";

export const Badge = ({
  children,
  className = "",
  variant = "default",
}) => {
  const base =
    "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border";

  const variants = {
    default: "bg-gray-100 text-gray-800 border-gray-300",
    outline: "bg-transparent border-gray-400 text-gray-700",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

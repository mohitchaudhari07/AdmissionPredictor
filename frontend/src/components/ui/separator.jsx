import React from "react";

export const Separator = ({ className = "" }) => {
  return (
    <hr className={`border-t my-2 ${className}`} />
  );
};

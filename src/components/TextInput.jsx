import React from "react";

export const TextInput = ({ value, handleChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="text-center p-4 text-xl border-amber-500 border-2 font-medium focus:outline-none focus:ring focus:ring-amber-500 text-black input rounded-full"
    />
  );
};

import React from "react";

export const TextInput = ({
  value,
  handleChange,
  placeholder,
  type = "text",
  customStyle,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`text-center p-4 text-xl border-amber-500 border-2 font-medium focus:outline-none focus:ring focus:ring-amber-500 input rounded-full text-slate-700 ${customStyle}`}
    />
  );
};

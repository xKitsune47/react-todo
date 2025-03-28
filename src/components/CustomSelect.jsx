import React from "react";

export const CustomSelect = ({
  defaultOption,
  options,
  handleChange,
  value,
}) => {
  return (
    <select
      className=" border-amber-500 border-2 text-slate-700 text-lg font-medium rounded-xl focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
      onChange={handleChange}
      value={value}>
      <option value="">{defaultOption}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

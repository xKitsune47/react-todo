import React from "react";
import { Link } from "react-router-dom";

const btnStyle =
  "hover:bg-amber-500 hover:text-white duration-200 w-full p-2 text-center text-black flex items-center justify-center";
const btnStyleActive =
  "bg-amber-500 p-2 text-center w-full flex items-center justify-center";

export const Button = ({
  to,
  text,
  active,
  handleActive,
  type,
  customStyle,
}) => {
  if (type === "primary") {
    return (
      <Link
        to={to}
        className={active === to ? btnStyleActive : btnStyle}
        onClick={handleActive}>
        {text}
      </Link>
    );
  }

  if (type === "secondary") {
    return (
      <Link
        to={to}
        className="border-2 border-amber-500 p-2 text-center w-96 mt-8 hover:bg-amber-500 hover:text-white duration-200 font-semibold text-lg rounded-full"
        onClick={handleActive}>
        {text}
      </Link>
    );
  }

  return (
    <button
      className={`border-2 border-amber-500 p-2 text-center w-96 mt-8 hover:bg-amber-500 hover:text-white duration-200 font-semibold text-lg rounded-full ${customStyle}`}>
      {text}
    </button>
  );
};

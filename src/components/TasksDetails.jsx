import React from "react";

export const TasksDetails = ({ title, text, color }) => {
  return (
    <p className={"text-xl flex items-center gap-2 justify-between"}>
      <span>{title}</span> <span className={`text-${color}-500`}>{text}</span>
    </p>
  );
};

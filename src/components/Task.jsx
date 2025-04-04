import {
  Check,
  Close,
  CreateRounded,
  Delete,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/accountSlice";
import { Priority } from "./Priority";

const base = "text-slate-600 cursor-pointer ";

export const Task = ({ task, onEdit }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  const handleComplete = () => {
    dispatch(completeTask(task.id));
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const overdue = task.date < Date.now();
  const formattedDate = new Date(task.date).toLocaleDateString("pl-PL");
  const formattedTime = new Date(task.date).toLocaleTimeString("pl-PL");

  return (
    <li
      className={`p-4 grid grid-rows-[1fr_auto] shadow-md rounded-full ${
        task.completed ? "opacity-40" : ""
      }`}>
      <div className="grid grid-cols-[auto_auto_2fr_2fr_1fr] gap-4 items-center px-8">
        {task.completed ? (
          <Close
            onClick={handleComplete}
            className={`${base} hover:text-red-500`}
          />
        ) : (
          <Check
            onClick={handleComplete}
            className={`${base} hover:text-green-500`}
          />
        )}
        <Priority
          priority={task.priority}
          overdue={overdue}
          completed={task.completed}
        />
        <h2 className="text-xl truncate">{task.name}</h2>
        <p className="text-center truncate">
          {task.completed ? (
            <span className="text-green-500 font-medium">Completed</span>
          ) : (
            <span className={`${overdue && "text-red-500 font-medium"}`}>
              {formattedDate}, {formattedTime}
              {overdue && ", OVERDUE"}
            </span>
          )}
        </p>
        <div className="flex justify-end">
          {expanded ? (
            <ExpandLess onClick={handleExpand} className="cursor-pointer" />
          ) : (
            <ExpandMore onClick={handleExpand} className="cursor-pointer" />
          )}
        </div>
      </div>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden px-8"
        style={{
          maxHeight: expanded ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}>
        <hr className="mt-3 text-slate-200" />
        <div className="grid grid-cols-[1fr_auto_auto] py-2">
          {task.description ? (
            <p>{task.description}</p>
          ) : (
            <p className="text-gray-500">No description provided</p>
          )}
          <CreateRounded
            className={`${base} mr-4 hover:text-amber-500`}
            onClick={onEdit}
          />
          <Delete
            className={`${base} hover:text-red-500`}
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
};

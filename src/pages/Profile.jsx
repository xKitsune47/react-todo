import React from "react";
import { useSelector } from "react-redux";
import { Details } from "../components/Details";
import { TasksDetails } from "../components/TasksDetails";
import placeholderImage from "../img/Portrait_Placeholder.png";

export const Profile = () => {
  const user = useSelector((state) => state.account);

  const completedTasks = user.tasks.reduce((acc, task) => {
    return task.completed ? acc + 1 : acc;
  }, 0);

  const overdueTasks = user.tasks.reduce((acc, task) => {
    return task.date < new Date().getTime() && !task.completed ? acc + 1 : acc;
  }, 0);

  const leftTasks = user.tasks.reduce((acc, task) => {
    return !task.completed ? acc + 1 : acc;
  }, 0);

  return (
    <div className="flex flex-col items-center h-full py-20 px-4">
      <h1 className="text-5xl text-amber-500 font-medium">Profile</h1>
      <div className="flex flex-col gap-4 mt-8">
        <Details title="Username" text={user.username.slice(0, 15)} />
        <Details title="Image">
          <img
            src={user.image ? user.image : placeholderImage}
            className="h-16 rounded-full"
          />
        </Details>

        <div className="grid grid-rows-2 min-w-lg shadow-lg py-4 px-8 shadow-amber-500/25 rounded-4xl">
          <h2 className="text-2xl font-medium">Tasks stats</h2>
          <TasksDetails
            title="Total tasks"
            text={user.tasks.length}
            color="gray"
          />
          <TasksDetails title="Overdue" text={overdueTasks} color="red" />
          <TasksDetails title="Completed" text={completedTasks} color="green" />
          <TasksDetails title="Left" text={leftTasks} color="gray" />
        </div>
      </div>
    </div>
  );
};

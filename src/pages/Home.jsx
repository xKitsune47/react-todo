import { Button } from "../components/Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/accountSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.account);

  return (
    <div className="flex flex-col items-center justify-center h-full py-20 px-4">
      <h1 className="text-5xl text-amber-500 font-medium">ToDo Kitsunes</h1>
      <p className="text-center text-gray-700 mt-4 text-xl">
        The place where you can save and track your daily tasks
      </p>
      {username ? (
        <>
          {" "}
          <p className="text-center text-gray-700 mt-4 text-xl">
            Welcome{" "}
            <span className="text-amber-500 font-semibold">{username}</span>!
          </p>
          <Button
            to="tasks"
            text="Go to your tasks"
            type="secondary"
            handleActive={() => dispatch(setActiveTab("tasks"))}
          />
        </>
      ) : (
        <Button
          to="login"
          text="Log In"
          type="secondary"
          handleActive={() => dispatch(setActiveTab("login"))}
        />
      )}
    </div>
  );
};

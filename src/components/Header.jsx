import React from "react";
import { Link, useNavigate } from "react-router-dom";
import fox from "../img/fox.png";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { logout, setActiveTab } from "../redux/accountSlice";

const btnStyle =
  "hover:bg-amber-500 hover:text-white duration-200 w-full p-2 text-center text-black flex items-center justify-center";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, activeTab } = useSelector((state) => state.account);

  return (
    <div className="grid grid-cols-2 w-full border-b-1 border-amber-500/25 border-opacity-10">
      <Link to="/" className="flex items-center text-2xl px-4 py-1 gap-4">
        <img src={fox} className="h-16" />
        <p className="text-gray-700 font-medium">ToDo Kitsunes</p>
      </Link>

      <div
        className={`grid md:text-2xl text-xl text-white w-full ${
          username ? `grid-cols-4` : `grid-cols-2`
        } justify-items-center`}>
        <Button
          to="/"
          text="Home"
          active={activeTab}
          handleActive={() => dispatch(setActiveTab("/"))}
          type="primary"
        />
        {username && (
          <>
            <Button
              to="tasks"
              text="Tasks"
              active={activeTab}
              handleActive={() => dispatch(setActiveTab("tasks"))}
              type="primary"
            />
            <Button
              to="profile"
              text="Profile"
              active={activeTab}
              handleActive={() => dispatch(setActiveTab("profile"))}
              type="primary"
            />
          </>
        )}
        {username ? (
          <div
            className={`${btnStyle} hover:cursor-pointer`}
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}>
            Log Out
          </div>
        ) : (
          <Button
            to="login"
            text="Log In"
            active={activeTab}
            handleActive={() => dispatch(setActiveTab("login"))}
            type="primary"
          />
        )}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { setUsername, setImage } from "../redux/accountSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [image, setImg] = useState("");

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handleImage = (e) => {
    setImg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) return;

    dispatch(setUsername(user));
    dispatch(setImage(image));
    navigate("../tasks");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full py-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full">
        <h1 className="text-5xl text-amber-500 font-medium">Create account</h1>
        <input
          type="text"
          value={user}
          onChange={handleUser}
          placeholder="Username"
          className="text-center p-4 text-xl border-amber-500 border-2 font-medium focus:outline-none focus:ring focus:ring-amber-500 text-black input rounded-full"
        />
        <input
          type="text"
          value={image}
          onChange={handleImage}
          placeholder="Image URL"
          className="text-center p-4 text-xl border-amber-500 border-2 font-medium focus:outline-none focus:ring focus:ring-amber-500 text-black input rounded-full"
        />
        <Button text="Go to tasks &rarr;" />
      </form>
    </div>
  );
};

import React, { useState } from "react";
import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { setUsername, setImage } from "../redux/accountSlice";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/TextInput";

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
        <h1 className="text-5xl text-amber-500 font-medium mb-4">
          Create account
        </h1>

        <TextInput
          value={user}
          handleChange={handleUser}
          placeholder="Username"
        />
        <TextInput
          value={image}
          handleChange={handleImage}
          placeholder="Image URL"
        />
        <Button text="Start tracking your tasks &rarr;" />
      </form>
    </div>
  );
};

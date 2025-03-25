import { Create } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setImage, setUsername } from "../redux/accountSlice";

export const Details = ({ children, title, text }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (!query) return;

    if (title === "Username") {
      dispatch(setUsername(query));
    }

    if (title === "Username") {
      dispatch(setImage(query));
    }

    setQuery("");
    setIsEditing(false);
  };

  return (
    <div className="grid grid-cols-[1fr_1fr_auto] min-w-lg shadow-lg py-4 px-8 rounded-full shadow-amber-500/25 items-center">
      <h2 className="text-2xl font-medium">{title}</h2>
      {isEditing ? (
        <form onSubmit={handleChange}>
          <input
            type="text"
            value={query}
            onChange={handleQuery}
            className="border-2 border-amber-500 rounded-lg px-2 focus:outline-none"
            onSubmit={handleChange}
            placeholder="Enter new value"
            onBlur={() => {
              setIsEditing(false);
            }}
            autoFocus
          />
        </form>
      ) : (
        <p className="text-2xl flex">{text ? text : children}</p>
      )}

      <Create
        className="text-amber-500"
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      />
    </div>
  );
};

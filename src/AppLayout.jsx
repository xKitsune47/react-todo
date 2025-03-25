import React from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Header />
      <Outlet />
    </div>
  );
};

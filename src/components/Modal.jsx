import { Close } from "@mui/icons-material";
import React from "react";

export const Modal = ({ children, onClose, title }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 w-[500px]">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-medium text-slate-700">{title}</h2>
            <Close
              className="cursor-pointer text-slate-400 hover:text-slate-600 transition-colors duration-300"
              onClick={onClose}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

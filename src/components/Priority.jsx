import {
  SignalCellular0BarRounded,
  SignalCellular1BarRounded,
  SignalCellular3BarRounded,
  SignalCellular4BarRounded,
  SignalCellularConnectedNoInternet0BarRounded,
  SignalCellularConnectedNoInternet1BarRounded,
  SignalCellularConnectedNoInternet3BarRounded,
  SignalCellularConnectedNoInternet4BarRounded,
} from "@mui/icons-material";
import React from "react";

export const Priority = ({ priority, overdue, completed }) => {
  if (completed) {
    return (
      <>
        {priority === "none" && (
          <SignalCellular0BarRounded className="text-slate-500" />
        )}
        {priority === "low" && (
          <SignalCellular1BarRounded className="text-green-500" />
        )}
        {priority === "medium" && (
          <SignalCellular3BarRounded className="text-amber-500" />
        )}
        {priority === "high" && (
          <SignalCellular4BarRounded className="text-red-500" />
        )}
      </>
    );
  }

  return (
    <>
      {priority === "none" && overdue && (
        <SignalCellularConnectedNoInternet0BarRounded className="text-slate-500" />
      )}
      {priority === "none" && !overdue && (
        <SignalCellular0BarRounded className="text-slate-500" />
      )}
      {priority === "low" && overdue && (
        <SignalCellularConnectedNoInternet1BarRounded className="text-green-500" />
      )}
      {priority === "low" && !overdue && (
        <SignalCellular1BarRounded className="text-green-500" />
      )}
      {priority === "medium" && overdue && (
        <SignalCellularConnectedNoInternet3BarRounded className="text-amber-500" />
      )}
      {priority === "medium" && !overdue && (
        <SignalCellular3BarRounded className="text-amber-500" />
      )}
      {priority === "high" && overdue && (
        <SignalCellularConnectedNoInternet4BarRounded className="text-red-500" />
      )}
      {priority === "high" && !overdue && (
        <SignalCellular4BarRounded className="text-red-500" />
      )}
    </>
  );
};

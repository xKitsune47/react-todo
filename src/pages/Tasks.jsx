import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Task } from "../components/Task";
import { Add } from "@mui/icons-material";
import { Modal } from "../components/Modal";

export const Tasks = () => {
  const { tasks } = useSelector((state) => state.account);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="flex flex-col items-center mt-12 xl:px-64 lg:px-32 md:px-16 px-4">
      <div className="w-full flex justify-between items-center px-8 mb-4">
        <h1 className="text-5xl font-medium text-amber-500">Tasks</h1>
        <Add
          className="cursor-pointer text-slate-600 hover:text-amber-500 transition-colors duration-300"
          onClick={() => setModalVisible(true)}
        />
      </div>

      {tasks.length > 0 ? (
        <>
          <ul className="mt-16 w-full">
            {tasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </ul>
        </>
      ) : (
        <span className="mt-16 text-2xl text-gray-600">No tasks yet!</span>
      )}
      {modalVisible && (
        <Modal onClose={() => setModalVisible(false)} title="Add new task" />
      )}
    </div>
  );
};

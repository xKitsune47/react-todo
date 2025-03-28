import React from "react";
import { Modal } from "./Modal";
import { TextInput } from "./TextInput";
import { Button } from "./Button";
import { CustomSelect } from "./CustomSelect";

export const TaskForm = ({
  handleModal,
  handleSubmitTask,
  taskName,
  handleTaskNameChange,
  taskDate,
  handleTaskDateChange,
  handleTaskPriorityChange,
  taskPriority,
  handleTaskDescriptionChange,
  taskDescription,
  error,
  editMode,
}) => {
  return (
    <Modal onClose={handleModal} title={editMode ? "Edit task" : "Add task"}>
      <form onSubmit={handleSubmitTask} className="flex flex-col gap-4">
        {/* task name */}
        <TextInput
          value={taskName}
          handleChange={handleTaskNameChange}
          placeholder="Task name"
          customStyle="text-left"
        />

        {/* task date */}
        <TextInput
          value={taskDate}
          handleChange={handleTaskDateChange}
          placeholder="Task date"
          type="datetime-local"
        />

        {/* task priority */}
        <p className="mb-[-4px] text-lg font-medium text-slate-700 w-full">
          Choose task priority
        </p>
        <CustomSelect
          options={[
            { label: "No priority", value: "none" },
            { label: "Low priority", value: "low" },
            { label: "Medium priority", value: "medium" },
            { label: "High priority", value: "high" },
          ]}
          handleChange={handleTaskPriorityChange}
          value={taskPriority}
        />

        {/* task description */}
        <textarea
          className="text-slate-700 p-4 text-xl border-amber-500 border-2 font-medium focus:outline-none focus:ring focus:ring-amber-500 input rounded-3xl"
          onChange={handleTaskDescriptionChange}
          value={taskDescription}
          rows={3}
          placeholder="Task description"
          maxLength={200}
        />
        <p className="text-lg text-red-500">{error}</p>

        {/* submit button */}
        <Button
          text={editMode ? "Update task" : "Add task"}
          customStyle="w-full hover:cursor-pointer"
        />
      </form>
    </Modal>
  );
};

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../components/Task";
import { Add } from "@mui/icons-material";
import { addTask, editTask } from "../redux/accountSlice";
import { TaskForm } from "../components/TaskForm";
import { CustomSelect } from "../components/CustomSelect";

const baseIconStyle =
  "cursor-pointer text-slate-600 hover:text-amber-500 transition-colors duration-300";

export const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.account);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");
  const [taskId, setTaskId] = useState(null);

  const handleEdit = (task) => {
    setEditMode(true);
    setEditModalVisible(true);
    setTaskName(task.name);
    setTaskDate(new Date(task.date).toISOString().slice(0, 16));
    setTaskDescription(task.description);
    setTaskPriority(task.priority);
    setTaskId(task.id);
  };

  const cleanStates = () => {
    // reset form fields
    setEditModalVisible(false);
    setEditMode(false);
    setError("");
    setTaskName("");
    setTaskDate(new Date());
    setTaskDescription("");
    setTaskPriority("");
    setTaskId(null);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();

    if (!taskName || !taskDate) {
      setError("Please fill in all fields.");
      return;
    }

    if (editMode) {
      dispatch(
        editTask({
          taskName,
          taskDate,
          taskDescription,
          taskPriority,
          taskId,
        })
      );
    } else {
      dispatch(addTask({ taskName, taskDate, taskDescription, taskPriority }));
    }

    // reset form fields
    cleanStates();
  };

  useEffect(() => {
    const filterTasks = () => {
      if (filter === "low") {
        return tasks.filter((task) => task.priority === "low");
      } else if (filter === "medium") {
        return tasks.filter((task) => task.priority === "medium");
      } else if (filter === "high") {
        return tasks.filter((task) => task.priority === "high");
      } else if (filter === "noncompleted") {
        return tasks.filter((task) => !task.completed);
      } else if (filter === "completed") {
        return tasks.filter((task) => task.completed);
      } else if (filter === "coming") {
        return tasks.filter(
          (task) => task.date > Date.now() && !task.completed
        );
      } else if (filter === "overdue") {
        return tasks.filter(
          (task) => task.date < Date.now() && !task.completed
        );
      }
      return tasks;
    };

    setFilteredTasks(filterTasks());
  }, [filter, tasks]);

  return (
    <div className="flex flex-col items-center mt-12 xl:px-64 lg:px-32 md:px-16 px-4">
      <div className="w-full flex justify-between items-center px-8 mb-4">
        <h1 className=" font-medium text-amber-500 text-5xl">Tasks</h1>
        <div className="flex items-center gap-4">
          <CustomSelect
            options={[
              { label: "Low priority", value: "low" },
              { label: "Medium priority", value: "medium" },
              { label: "High priority", value: "high" },
              { label: "Not completed", value: "noncompleted" },
              { label: "Completed", value: "completed" },
              { label: "Incoming", value: "coming" },
              { label: "Overdue", value: "overdue" },
            ]}
            defaultOption={"No filter"}
            handleChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
          <Add
            className={baseIconStyle}
            onClick={() => setEditModalVisible(true)}
            sx={{ fontSize: 40 }}
          />
        </div>
      </div>

      {tasks.length > 0 ? (
        <>
          <ul className="mt-16 w-full">
            {filteredTasks.map((task) => (
              <Task task={task} key={task.id} onEdit={() => handleEdit(task)} />
            ))}
          </ul>
        </>
      ) : (
        <span className="mt-16 text-2xl text-gray-600">No tasks yet!</span>
      )}
      {editModalVisible && (
        <TaskForm
          handleModal={() => {
            setEditModalVisible(false);
            setEditMode(false);
            cleanStates();
          }}
          handleSubmitTask={handleSubmitTask}
          taskName={taskName}
          handleTaskNameChange={(e) => setTaskName(e.target.value)}
          taskDate={taskDate}
          handleTaskDateChange={(e) => setTaskDate(e.target.value)}
          handleTaskPriorityChange={(e) => setTaskPriority(e.target.value)}
          taskPriority={taskPriority}
          handleTaskDescriptionChange={(e) =>
            setTaskDescription(e.target.value)
          }
          taskDescription={taskDescription}
          error={error}
          editMode={editMode}
        />
      )}
    </div>
  );
};

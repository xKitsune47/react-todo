import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "test acc",
  image: "https://i.pravatar.cc/320",
  activeTab: "/",
  loading: false,
  tasks: [
    {
      id: 1,
      name: "lorem ipsum sit dolor it amet",
      description: "Description 1",
      completed: false,
      date: 1742853600000,
      priority: "high",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description 2",
      completed: false,
      date: 1742940000000,
      priority: "medium",
    },
    {
      id: 3,
      name: "Task 3",
      description: "Description 3",
      completed: true,
      date: 1742943600000,
      priority: "low",
    },
    {
      id: 4,
      name: "Task 4",
      description: "",
      completed: false,
      date: 1743361200000,
      priority: "none",
    },
  ],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = "";
      state.activeTab = "/";
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        name: action.payload.taskName,
        description: action.payload.taskDescription || "",
        completed: false,
        date: new Date(action.payload.taskDate).getTime(),
        priority: action.payload.taskPriority || "low",
      });
    },
    editTask: (state, action) => {
      const task = state.tasks.filter(
        (task) => task.id === action.payload.taskId
      )[0];
      if (task) {
        Object.assign(task, {
          name: action.payload.taskName,
          description: action.payload.taskDescription,
          date: new Date(action.payload.taskDate).getTime(),
          priority: action.payload.taskPriority,
        });
      }
    },
    completeTask: (state, action) => {
      const task = state.tasks.filter((task) => task.id === action.payload)[0];
      if (task) {
        Object.assign(task, { completed: !task.completed });
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const {
  setUsername,
  logout,
  addTask,
  editTask,
  completeTask,
  deleteTask,
  setActiveTab,
  setImage,
} = accountSlice.actions;

export default accountSlice.reducer;

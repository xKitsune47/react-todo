import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "owo",
  image: "https://i.pravatar.cc/320",
  activeTab: "/",
  loading: false,
  tasks: [
    {
      name: "Task 1",
      description: "Description 1",
      completed: false,
      date: 1742853600000,
      priority: "high",
    },
    {
      name: "Task 2",
      description: "Description 2",
      completed: false,
      date: 1742940000000,
      priority: "medium",
    },
    {
      name: "Task 3",
      description: "Description 3",
      completed: true,
      date: 1742943600000,
      priority: "low",
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
      state.tasks = action.payload;
    },
    editTask: (state, action) => {
      state.tasks = action.payload;
    },
    deleteTask: (state, action) => {
      state.tasks = action.payload;
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
  deleteTask,
  setActiveTab,
  setImage,
} = accountSlice.actions;

export default accountSlice.reducer;

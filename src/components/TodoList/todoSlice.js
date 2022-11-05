import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "Learn Javascript",
      completed: false,
      priority: "High",
    },
    {
      id: 2,
      name: "Learn HTML & CSS",
      completed: true,
      priority: "Low",
    },
    {
      id: 3,
      name: "Learn ReactJS",
      completed: false,
      priority: "High",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }, //action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});

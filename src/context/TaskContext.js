import React from "react";

const TaskContext = React.createContext();

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "TasksTypes.ADD":
      return [...state, action.payload];
    case "TasksTypes.DELETE":
      return [...state.filter(({ id }) => id !== action.payload)];
    case "TasksTypes.EDIT":
      let index = state.findIndex((task) => task.id === action.payload.id);
      state[index] = action.payload;
      return state;

    default:
      return state;
  }
};

export { tasksReducer, TaskContext };

import React from 'react';

const TaskContext = React.createContext();

const tasksReducer = (state, action) => {
      switch (action.type) {
            case "TasksTypes.ADD":
              return [...state, action.payload];
            case "TasksTypes.DELETE":
              console.log(action.payload);
              console.log([...state.filter(({ id }) => id !== action.payload)]);
              return [...state.filter(({ id }) => id !== action.payload)];
            default:
              return state;
          }
};

export { tasksReducer, TaskContext };



import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import {TaskContext} from "../../context/TaskContext";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./../TaskForm";
import TaskCard from "./../TaskCard";
import './Tasks.css';


const Tasks = () => {
    const[state, setState] = useState([])
    const { dispatch } = React.useContext(TaskContext);
    const history = useHistory()

    const handleInputChange = ({ target: { name, value } }) => {
        console.log(name)
        //setState({ [name]: value });
        setState((prev) => ({
            ...prev,
            [name]: value
          }));
      };

    const handleSubmit = () => {
        const task = { id: uuidv4(), ...state };
        dispatch({
            type: "TasksTypes.ADD",
            payload: task,
            })
        history.push("/");
      };

    return(
       <>
        <TaskCard className="card" task={state} fluid />
        <TaskForm
          formData={state}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </>
    );
};

export default Tasks;
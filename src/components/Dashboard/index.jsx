import React, { useContext } from 'react';
//import { useAuth } from "../../context/AuthContext";
import { TaskContext } from '../../context/TaskContext';
//import { Link, useHistory } from "react-router-dom";
import TaskGroup from './../TaskGroup';
import { Container } from 'react-bootstrap';
import './task.css';

function Dashboard() {
  const { state } = useContext(TaskContext);
  return (
    <Container className="link" fluid>
      <TaskGroup tasks={state} />
    </Container>
  );
}

export default Dashboard;

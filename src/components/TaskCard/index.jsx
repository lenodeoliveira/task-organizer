import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {TaskContext} from "../../context/TaskContext";

const TaskCard = ({task: { id, title, subtitle, description } }) => {
  const { dispatch } = React.useContext(TaskContext);
  
    return (
      <Card bg="light" border="dark">
         <Card.Header>Tarefa</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
           <Card.Text>{subtitle}</Card.Text>
            <Card.Text>{description}</Card.Text>
          <Button variant="info">
           Editar
            </Button>{' '}

          <Button onClick={() => 
            dispatch({
              type: "TasksTypes.DELETE",
              payload: id,
              })} variant="danger">
          Deletar
            </Button>
        </Card.Body>
      </Card>
    );

}

export default TaskCard
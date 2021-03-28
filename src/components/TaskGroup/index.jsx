import React from 'react';
import TaskCard from './../TaskCard';
import { CardColumns } from 'react-bootstrap';

const TaskGroup = ({tasks}) => {

    return (
        <CardColumns>
          {tasks.map((task) => (
          <TaskCard key={task.id.toString()} task={task} />
            ))}
      </CardColumns>
    );

} 

export default TaskGroup;


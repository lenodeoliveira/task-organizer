import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router";
import { TaskContext } from "../../context/TaskContext";

const EditTask = () => {
  const { id } = useParams();
  const history = useHistory();
  const { state, dispatch } = React.useContext(TaskContext);
  let arrFiltered;
  if (state) {
    arrFiltered = state.filter((t) => t.id === id);
  }

  const task = arrFiltered[0];
  const [stateEdit, setStateEdit] = useState({ ...task });

  const handleUpdateTask = ({ target: { name, value } }) => {
    /*setStateEdit({ [name]: value });*/
    setStateEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    // console.log("EDIT", stateEdit);
    dispatch({
      type: "TasksTypes.EDIT",
      payload: stateEdit,
    });
    history.push("/");
  };

  return (
    <Form className="tasks">
      <Form.Group controlId="title">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="title"
          value={stateEdit.title}
          onChange={(event) => handleUpdateTask(event)}
        />
      </Form.Group>
      <Form.Group controlId="subtitle">
        <Form.Label>Subtitulo</Form.Label>
        <Form.Control
          size="lg"
          name="subtitle"
          value={stateEdit.subtitle}
          onChange={(event) => handleUpdateTask(event)}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={stateEdit.description}
          name="description"
          onChange={(event) => handleUpdateTask(event)}
        />
        <Button onClick={onSubmit} variant="primary">
          Adicionar Tarefa
        </Button>
      </Form.Group>
    </Form>
  );
};

export default EditTask;

/*
 
*/

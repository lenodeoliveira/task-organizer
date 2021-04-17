import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskForm = ({
  formData: { title, subtitle, description },
  onInputChange,
  onSubmit,
}) => {
  return (
    <Form className="tasks">
      <Form.Group controlId="title">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          size="lg"
          name="title"
          value={title || ''}
          placeholder="titulo"
          onChange={(event) => onInputChange(event)}
        />
      </Form.Group>
      <Form.Group controlId="subtitle">
        <Form.Label>Subtitulo</Form.Label>
        <Form.Control
          size="lg"
          name="subtitle"
          value={subtitle || ''}
          placeholder="subtitulo"
          onChange={(event) => onInputChange(event)}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={description || ''}
          name="description"
          onChange={(event) => onInputChange(event)}
        />
      </Form.Group>
      <Button onClick={onSubmit} variant="primary">
        Adicionar Tarefa
      </Button>
    </Form>
  );
};

export default TaskForm;

import React, { useState } from "react";
import "./EditTodoForm.css";

const EditTodoForm = ({ id, text, onEdit }) => {
  const [todo, setTodo] = useState(text);

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const todoEditHandler = (e) => {
    e.preventDefault();
    onEdit(e.target.todo.id, e.target.todo.value);
  };

  return (
    <form
      onSubmit={todoEditHandler}
      className="EditTodoForm"
      data-testid={text}
    >
      <input
        id={id}
        type="text"
        name="todo"
        value={todo}
        onChange={todoChangeHandler}
      />
      <button>Edit</button>
    </form>
  );
};

export default EditTodoForm;

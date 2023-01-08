import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ onAdd }) => {
  const [todo, setTodo] = useState("");

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.todo);
    onAdd(e.target.todo.value);
    setTodo("");
  };
  return (
    <form
      onSubmit={todoSubmitHandler}
      className="NewTodoForm"
      data-testid="new-todo-form"
    >
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="what i need to do next..."
        onChange={todoChangeHandler}
        data-testid="new-todo-form-input"
      />
      <button data-testid="new-todo-form-button">Submit</button>
    </form>
  );
};

export default NewTodoForm;

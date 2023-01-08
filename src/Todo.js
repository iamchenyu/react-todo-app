import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import "./Todo.css";

const Todo = ({ id, text, finished, onDelete, onEdit }) => {
  const [isFinished, setIsFinished] = useState(finished);
  const [isEdit, setIsEdit] = useState(false);

  const isStrike = isFinished ? "line-through" : "none";

  const checkHandler = () => {
    setIsFinished(!isFinished);
  };

  const editTodoHandler = (id, text) => {
    onEdit(id, text);
    setIsEdit(false);
  };

  return (
    <div className="Todo">
      <input type="checkbox" checked={isFinished} onChange={checkHandler} />
      <span style={{ textDecoration: isStrike }}>{text}</span>
      <button onClick={() => onDelete(id)}>X</button>
      <button onClick={() => setIsEdit(true)}>Edit Todo</button>
      {isEdit ? (
        <EditTodoForm text={text} id={id} onEdit={editTodoHandler} />
      ) : null}
    </div>
  );
};

export default Todo;

import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const INITIAL_STATE = [
  { id: uuid(), text: "Feed Dogs", finished: true },
  { id: uuid(), text: "Go To Gym", finished: false },
];

const TodoLists = () => {
  //   if (!localStorage.getItem("todos")) {
  //     console.log("here1");
  //     localStorage.setItem("todos", JSON.stringify(INITIAL_STATE));
  //   } else {
  //     console.log("here2");
  //     console.log(todos);
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   }

  const [todos, setTodos] = useState(INITIAL_STATE);

  const deleteHandler = (removeId) => {
    setTodos(todos.filter((todo) => todo.id !== removeId));
  };

  const addHandler = (todo) => {
    setTodos((todos) => [
      ...todos,
      { id: uuid(), text: todo, finished: false },
    ]);
  };

  const editHandler = (editId, editText) => {
    // Old version
    // setTodos((todos) => {
    //   let todosCopy = [...todos];
    //   let todo = todosCopy.find((todo) => todo.id === editId);
    //   todo.text = editText;
    //   return todosCopy;
    // });

    // New version
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );
  };

  const renderTodos = todos.map(({ id, text, finished }) => (
    <Todo
      key={id}
      id={id}
      text={text}
      finished={finished}
      onDelete={deleteHandler}
      onEdit={editHandler}
    />
  ));

  return (
    <div className="TodoLists">
      <NewTodoForm onAdd={addHandler} />
      {renderTodos}
    </div>
  );
};

export default TodoLists;

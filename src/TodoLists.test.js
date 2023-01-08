import { render, fireEvent, getByText } from "@testing-library/react";
import TodoLists from "./TodoLists";

it("renders without crashing", () => {
  render(<TodoLists />);
});

it("matches the snapshot", () => {
  const { asFragment } = render(<TodoLists />);
  expect(asFragment()).toMatchSnapshot();
});

it("removes the todo", () => {
  const { queryByText } = render(<TodoLists />);
  const todo = queryByText("Feed Dogs");
  expect(todo).toBeInTheDocument();

  const deleteButton = todo.nextElementSibling;
  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});

it("adds a new todo", () => {
  const { queryByText, getByTestId } = render(<TodoLists />);
  expect(queryByText("Do Homework")).not.toBeInTheDocument();

  const input = getByTestId("new-todo-form-input");
  const button = getByTestId("new-todo-form-button");

  fireEvent.change(input, { target: { value: "Do Homework" } });

  fireEvent.click(button);

  expect(queryByText("Do Homework")).toBeInTheDocument();
  expect(input).toHaveValue("");
});

it("edits todo", () => {
  const { queryByText, queryByTestId } = render(<TodoLists />);
  const todo = queryByText("Feed Dogs");
  const editButton = todo.nextElementSibling.nextElementSibling;

  let editForm = queryByTestId("Feed Dogs");
  expect(editForm).toBeNull();

  fireEvent.click(editButton);

  editForm = queryByTestId("Feed Dogs");
  expect(editForm).toBeInTheDocument();

  const input = editForm.firstChild;
  const button = editForm.lastChild;

  fireEvent.change(input, {
    target: { value: "Do Homework" },
  });

  fireEvent.click(button);

  expect(queryByText("Feed Dogs")).not.toBeInTheDocument();
  expect(queryByText("Do Homework")).toBeInTheDocument();
});

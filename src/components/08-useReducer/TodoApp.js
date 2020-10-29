import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./styles.css";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: "Aprender React",
//     done: false,
//   },
// ];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  //   const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todosList = todos.map((ele, index) => {
    return <Todo key={ele.id} ele={ele} index={index} dispatch={dispatch} />;
  });

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <TodoForm dispatch={dispatch} />
      <hr />
      <h3>Tareas</h3>
      <div className="row">{todosList}</div>
    </div>
  );
};

export default TodoApp;

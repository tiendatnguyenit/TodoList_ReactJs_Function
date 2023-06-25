import React, { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Todo = memo((props) => {
  const { todo, markCompleted, getEditTodo, index, removeTodo } = props;
  return (
    <li
      className={`${
        todo.isCompleted ? "completed" : ""
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => markCompleted(todo.id)}
        />
        {/* <label onDoubleClick={() => getEditTodo(todo.id)}>{todo.text}</label> */}
        <label>{todo.text}</label>
        <button
          className="editItem"
          onClick={() => getEditTodo(todo.id, index)}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button className="destroy" onClick={() => removeTodo(todo.id)}>
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    </li>
  );
});

export default Todo;

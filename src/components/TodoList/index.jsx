import React, { memo } from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo";

const TodoList = memo(() => {
  const listTodos = useSelector((state) => state.todos.todos);
  console.log("listTodosss", listTodos);
  const checkAll = () => {
    console.log("checkAll - todoList");
  };
  const isCheckedAll = false;

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        onChange={() => {
          console.log("mmark done");
          checkAll();
        }}
        checked={isCheckedAll}
      />
      <label htmlFor="toggle-all" onClick={checkAll}></label>
      <ul className="todo-list">
        {(listTodos.length > 0) && listTodos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
});

export default TodoList;

import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, startEditingTodo, toggleTodo } from "../../redux/actions";

const Todo = memo((props) => {
  const { todo } = props;
  console.log("todo isCompleted", todo.completed);
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    console.log("handleToggleTodo");
    dispatch(toggleTodo(todo.id));
  };
  const handleEditTodo = () => {
    console.log("handleEditTodo");
    dispatch(startEditingTodo(todo));
  };
  const handleDeleteTodo = () => {
    console.log("handleDeleteTodo");
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className={todo?.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo?.completed}
          onChange={handleToggleTodo}
        />
        <label>{todo?.text}</label>
        {!todo?.completed && (
          <button className="editItem" onClick={handleEditTodo}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
        )}
        <button className="destroy" onClick={handleDeleteTodo}>
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    </li>
  );
});

export default Todo;

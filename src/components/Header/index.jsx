import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, stopEditingTodo } from "../../redux/actions";

function Header() {
  const dispatch = useDispatch();
  const editingTodo = useSelector((state) => state.todos.editingTodo);

  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleAddTodo = () => {
    if (text.trim() === "") return;

    if (isEditing) {
      const trimmedText = text.trim();
      if (trimmedText !== editingTodo.text.trim()) {
        dispatch(editTodo({ ...editingTodo, text: trimmedText }));
      } else {
        dispatch(stopEditingTodo());
      }
    } else {
      dispatch(addTodo(text.trim()));
    }

    setText("");
    setIsEditing(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    } else if (event.key === "Escape") {
      setText("");
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (editingTodo) {
      setIsEditing(true);
      setText(editingTodo.text);
      inputRef.current.focus();

      return () => {
        setIsEditing(false);
      };
    }
  }, [editingTodo]);

  const inputClassName = isEditing ? "edit-todo" : "new-todo";

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        ref={inputRef}
        className={inputClassName}
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </header>
  );
}

export default Header;

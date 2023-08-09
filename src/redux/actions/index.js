export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    id: new Date().getTime(),
    text,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});

export const startEditingTodo = (todo) => ({
  type: "START_EDITING_TODO",
  payload: todo,
});

export const editTodo = (todo) => ({
  type: "EDITING_TODO",
  payload: todo,
});

export const stopEditingTodo = () => ({
    type: "STOP_EDITING_TODO",
  });

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

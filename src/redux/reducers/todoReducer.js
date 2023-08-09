const initialState = {
  todos: [],
  editingTodo: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };

    case "START_EDITING_TODO":
      return {
        ...state,
        editingTodo: action.payload,
      };

    case "EDITING_TODO":
      return {
        ...state,
        editingTodo: null,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text,
            };
          }
          return todo;
        }),
      };

    case "STOP_EDITING_TODO":
      return {
        ...state,
        editingTodo: null,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;

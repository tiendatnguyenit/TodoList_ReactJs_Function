// import React, { memo, useState } from "react";

// const Header = memo((props) => {
//   const { addTodo } = props;
//   const [text, setText] = useState("");
//   const inputRef = useRef();

//   const onAddTodo = (event) => {
//     if (event.key === "Enter" && text.trim() !== "") {
//       addTodo({
//         id: new Date().valueOf(),
//         text: text.trim(),
//         isCompleted: false,
//       });
//       setText("");
//     }
//   };

//   return (
//     <header className="header">
//       <h1>todos</h1>
//       <input
//         className="new-todo"
//         placeholder="What needs to be done?"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyPress={onAddTodo}
//       />
//     </header>
//   );
// });

// export default Header;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isEditing: false,
    };
    this.inputRef = React.createRef();
  }

  onAddTodo = (event) => {
    console.log("onAddTodo", event.key);
    if (event.key === "Enter" && this.state.text.trim() !== "") {
      if (this.state.isEditing) {
        this.props.editTodo(
          {
            id: this.props.todoEditing.id,
            text: this.state.text.trim(),
            isCompleted: false,
          },
          this.props.todoEditing.index
        );
        this.setState({ text: "" });
        this.setState({ isEditing: false });
        this.props.getEditTodo('', '')
      } else {
        this.props.addTodo({
          id: new Date().valueOf(),
          text: this.state.text.trim(),
          isCompleted: false,
        });
        this.setState({ text: "" });
        this.setState({ isEditing: false });
      }
    }
    if(event.key === "Escape"){
      this.setState({ text: "" });
      this.setState({ isEditing: false });
      this.props.getEditTodo('', '')
    }
  };

  componentDidMount() {
    const { editTodo, todoEditing, listTodos } = this.props;
    console.log("componentDidMount", todoEditing);
  }

  componentDidUpdate(prevProps) {
    const { todoEditing, listTodos } = this.props;
    console.log("componentDidUpdate", todoEditing);
    console.log("prevProps", prevProps);
    console.log("this.start", this.state.isEditing);
    if (todoEditing.id !== prevProps.todoEditing.id && todoEditing.id !== "") {
      const findTodo = listTodos.find((todo) => todo.id === todoEditing.id);
      if (findTodo.isCompleted) {
        alert("Unable to edit a completed todo");
        this.setState({ isEditing: false });
      } else {
        this.inputRef.current.focus();
        this.setState({ text: findTodo.text });
        this.setState({ isEditing: true });
      }
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          ref={this.inputRef}
          className={this.state.isEditing ? "edit-todo" : "new-todo"}
          placeholder="What needs to be done?"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          onKeyPress={this.onAddTodo}
        />
      </header>
    );
  }
}

export default Header;

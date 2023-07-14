import React from "react";
import './toDoList.css';
const TodoItem = ({ children, checked, handleCheck }) => (
    <div className="todo-item">
      <input
        type="checkbox"
        defaultChecked={true}
        onChange={e => handleCheck(children)}
      />
      <span>{children.name}</span>
    </div>
  );
  

export default TodoItem;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toogleTask } from "./actions/todoActions";
import { TOGGLE_TASK } from "./actions/types";

const Todo = ({ todo }) => {
  const [updtatedTod, setUpdtatedTod] = useState(todo);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <span
          style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          onClick={() => dispatch(toogleTask(todo.id))}
        >
          {todo.desc}
        </span>
        <button className='a' onClick={() => dispatch(deleteTodo(todo.id))}>Del</button>
      </div>
      <div>
        <input
          value={updtatedTod.desc}
          onChange={(e) =>
            setUpdtatedTod({ ...updtatedTod, desc: e.target.value })
          }
        ></input>
        <button onClick={()=>dispatch(editTodo(updtatedTod))}>update</button>
      </div>
    </div>
  );
};

export default Todo;

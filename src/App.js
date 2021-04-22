
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./actions/todoActions";
import TodoList from "./TodoList";
import { v4 } from "uuid";
import { toggleFilter } from "./actions/filterActions";

const App = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    id: v4(),
    desc: "",
    isDone: false,
  });
  const filter = useSelector(state => state.filterReducer)
  console.log(filter)
  const todos = useSelector((state) => state.todoReducer);

  const handleSave = () => {
    dispatch(addTodo(newTodo));
    setNewTodo({
      id: v4(),
      desc: "",
      isDone: false,
    });
  };
  return (
    <div>
      <div>
        <button   className="btn1" onClick={()=>dispatch(toggleFilter(null))}>ALL</button>
        <button  className="btn2" onClick={()=>dispatch(toggleFilter(true))}>DONE</button>
        <button className="btn3" onClick={()=>dispatch(toggleFilter(false))}>UNDONE</button>
      </div>
      <div>
        <input  className='x'
          type="text"
          placeholder="Add Task Here"
          value={newTodo.desc}
          onChange={(e) => setNewTodo({ ...newTodo, desc: e.target.value })}
        ></input >{" "}
        <button className='y' onClick={handleSave}>ADD</button>
      </div>
      <TodoList todos={filter===null? todos:todos.filter(el=>el.isDone===filter)}></TodoList>
    </div>
  );
};

export default App;
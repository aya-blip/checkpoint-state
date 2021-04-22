import React from 'react'
import Todo from './Todo'
import './App.css'
const TodoList = ({todos}) => {
    return (
        <div >
            {todos.map(todo=><div className='box'><Todo todo={todo} ></Todo></div>)}
        </div>
    )
}

export default TodoList

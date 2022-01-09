import React, { useState, useEffect } from 'react'
import functions from '../../utils/functions'

// css line-through #complete todo.
// useContext to give every component access to todos. 

type TodoItem = {
 task: string,
 length: number,
 time: string,
 completed: boolean,
}

interface TodoProps{
 todo: TodoItem,
 todos: TodoItem [],
 completeTodoAction: Function
}

const Index = (props: TodoProps) => {
 const { todo, completeTodoAction, todos } = props

 console.log(functions.formateTime(todo.time))
 return (
  <div>
   <p className={todo.completed ? 'completed-todo' : 'incomplete-todo'}>{todo.task}</p>
   <p>{todo.length}</p>
   <p>{functions.formateTime(todo.time)}</p>
   
   <input type="checkbox" name="" id="" checked={todo.completed} onClick={() => completeTodoAction(todo, todos)}/>
  </div>
 )
}

export default Index

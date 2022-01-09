import React from 'react'
import Todo from './index'

type TodoItem = {
 task: string,
 length: number,
 completed: boolean,
 time: string
}

interface TodosProps{
 todos: TodoItem[],
 completeTodoAction: Function
}

const Todos = (props: TodosProps) => {

  const renderTodos = (todos : TodoItem[]) => {
   return props.todos.map(todo => {
    return <Todo todo={todo} completeTodoAction={props.completeTodoAction} todos={props.todos}/>
   })
  }

  

 return (
  <div>
   { props.todos.length ? renderTodos(props.todos) : null }
  </div>
 )
}

export default Todos

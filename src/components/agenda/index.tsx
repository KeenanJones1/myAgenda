import { useState, useEffect } from 'react'
import Todos from '../todo/todos'
import TodoCreator from '../todo/creator'
import functions from '../../utils/functions'

type TodoItem = {
 task: string,
 length: number,
 time: string,
 completed: boolean,
}

type AgendaItem = {
 title:string,
 description:string,
 date:string,
 todos: TodoItem[]
}

interface AgendaProps{
 agenda: AgendaItem,
 updateAgenda: Function,
}

// add agenda functionality to interactions with todo
const Index = ({ agenda, updateAgenda }: AgendaProps) => {
 const [todos, setTodos] = useState<TodoItem[]>([]);
 const [openForm, setOpenForm] = useState(false);

 useEffect(() => {
  setTodos(agenda.todos)
 }, [])

 const completeTodoAddition = (todo : TodoItem, todos :  TodoItem[]) => {
  // check if addTodo returns valid array. 
  functions.agenda.addAgendaTodo(agenda, todo)
  setTodos(functions.todos.addTodo(todo, todos));
}

const completeTodoAction = (todo : TodoItem, todos : TodoItem[]) => {
  // check if return value returns todos or not.
  if(!!functions.todos.findTodo(todo, todos)){

    setTodos(functions.todos.completeTodo(todo, todos));
    updateAgenda(agenda)
  }else{
    alert("Todo not found!");
    return false;
  }
}

const formHandler = () => {
 setOpenForm(!openForm);
}

 return (
  <div>
   <div className="agenda-info">
    <br/>
    <button onClick={() => formHandler()}>{!openForm ? "Create new Todo" : "Close form"}</button>
    <h1>{agenda.title}</h1>
    <p>{agenda.date}</p>
    <p>{agenda.description}</p>
   </div>

   <div className="todos">
    <Todos todos={todos} completeTodoAction={completeTodoAction}/>
    {openForm ? <TodoCreator completeTodoAddition={completeTodoAddition} todos={todos}/> : null}
   </div>
  </div>
 )
}

export default Index

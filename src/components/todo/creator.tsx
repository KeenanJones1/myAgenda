import Todo from './TodoModel';
import { useState } from 'react'
type TodoItem = {
 task: string,
 length: number,
 completed: boolean,
 time: string
}

interface TodoCreatorProps{
 completeTodoAddition: Function,
 todos: TodoItem[],
}

const Creator = ({ completeTodoAddition, todos }: TodoCreatorProps) => {
 const [ todo, setTodo ] = useState({
  task : '',
  length: 0,
  time: '',
 });

 const parseLength = ( length:string ) => {
  return parseFloat(length);
 }

 const handleForm = (e:any) => {
  let { name, value } = e.target
  if(name === 'length') value = parseLength(value);
  setTodo(prevState => ({
   ...prevState, 
   [name] : value
  }));
 }

 const submitForm = () => {
  const answer = window.confirm(
   'Are you sure you want to create this task'
  );

  if(answer){
   const newTodo = new Todo(todo.task, todo.length, todo.time);
   completeTodoAddition(newTodo, todos);
   todo.task = '';
   todo.length = 0;
  }
 }

 return (
  <div>
   <div className="form">
    <div className="task-form">
     <label htmlFor="task">Task</label>
     <input type="text" name="task" id="task-input" onChange={(event) => handleForm( event )} value={todo.task}/>
    </div>

    <div className="task-length">
     <label htmlFor="length">Length in 30mins increments </label>
     <input type="number" name="length" step="0.5" min="0.5" max="6" id="length-input" onChange={(event) => handleForm( event )} value={todo.length}/>
    </div>
    
    <div className="task-time">
     <label htmlFor="time">Time of todo</label>
     <input type="time" name="time" id="" onChange={( event ) => handleForm( event )} value={todo.time}/>
    </div>

    <div className="submit-btn">
     <button type="submit" onClick={() => submitForm()}>Submit</button>
    </div>

   </div>
  </div>
 )
}

export default Creator;
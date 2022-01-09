import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AgendaCreator from './components/agenda/creator'
import Agendas from './components/agenda/agendas'
import functions from './utils/functions'
import Timer from './components/timer/index'

// need to test the following functions: completeTodo, findTodo

function App() {
  type TodoItem = {
    task: string,
    length: number,
    completed: boolean,
    time: string
  }

  type AgendaItem = {
    title: string,
    description: string,
    date: string,
    todos: TodoItem[],
    // timers: TimerItem[]
  }

  const [openModal, setOpenModal] = useState(false);
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [agendas, setAgendas] = useState<AgendaItem[]>([]);

  // maybe need to add one function to handle all state updates 
  // arguements are todo, todos, callback function ie completeTodo, addTodo. 



  const completeAgendaCreation = (agd : AgendaItem, agds : AgendaItem[] ) => {
    setAgendas(functions.agenda.add(agd, agds));
  }

  const updateAgenda = (agd : AgendaItem) => {
    setAgendas(functions.agenda.update(agd, agendas))
  }
  
  return (
    <div className="App">
      <button onClick={() => setOpenModal(!openModal)}>{!openModal ? "Create new Agenda" : "Close Agenda Creator"}</button>
      {openModal ? <AgendaCreator agendas={agendas} completeAgendaCreation={completeAgendaCreation}/> : null}

      {/* <Agendas agendas={agendas} updateAgenda={updateAgenda}/> */}
      
      <Timer />
    </div>
  );
}

export default App;
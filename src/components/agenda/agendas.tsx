import React from 'react'
import Agenda from './index'

type TodoItem = {
 task: string,
 length: number,
 completed: boolean,
 time: string
}

// type AgendaItem = AgendaModel;
type AgendaItem = {
 title: string,
 description: string,
 date: string,
 todos: TodoItem[],
};


interface AgendasProps{
 agendas: AgendaItem[],
 updateAgenda: Function
 // activeAgenda: Function,
}

// show all agendas with listed todos
const Agendas = (props : AgendasProps) => {

 const renderAgendas = (agendas : AgendaItem[]) => {
  return agendas.map(agenda => {
   return <Agenda agenda={agenda} updateAgenda={props.updateAgenda}/>
  })
 }

 return (
  <div>
   { props.agendas.length ? renderAgendas(props.agendas) : null }
  </div>
 )
}

export default Agendas;
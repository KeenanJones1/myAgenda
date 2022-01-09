import Todo from '../todo/TodoModel'

export default class Agenda{
 title:string;
 date:string;
 descripition:string;
 todos: Todo[];

 constructor( title:string, date:string, description:string){
  this.title = title;
  this.date = date;
  this.descripition = description;
  this.todos = [];
 }
} 
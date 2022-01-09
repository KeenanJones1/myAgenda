// const { time } = require("console");
// time length in 15mins increments 

export default class Todo{
 task:string;
 completed:boolean;
 length:number; 
 time: string;

 constructor( task:string, length:number, time:string ){
  this.task = task;
  this.completed = false;
  this.length = length;
  this.time = time;
 }

 complete(){
  this.completed = true; 
  return this;
 }

 isCompleted(){
  return this.completed;
 }

 uncomplete(){
  this.completed = false;
  return this;
 }
} 
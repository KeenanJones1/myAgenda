const functions = {
  formateTime: function formateTime(date) {
    const timesplit = date.split(':');
    if(timesplit[0] === '12') return `12:${timesplit[1]} pm`
    if(timesplit[0] === '00') return `12:${timesplit[1]} am`
    return parseInt(timesplit[0]) < 12 ? `${date} am` : `${(parseInt(timesplit[0]) - 12)}:${timesplit[1]} pm`
  },
 todos: {
  findTodo: (td, todos) => {
   let todoArr = [...todos];
   let tempTodo = todoArr.find(ele => ele.task === td.task)
   return tempTodo;
  },

  completeTodo: (td, todos) => {
   let foundTodo = functions.todos.findTodo(td, todos);
    if(!!foundTodo){
      foundTodo.completed = !td.completed;
      let todoArr = [...todos];
      let todoIdx = todos.findIndex(ele => ele.task === td.task );
      todoArr[todoIdx] = foundTodo
      return todoArr;
    }

    return todos;
  },

  addTodo : (todo, todos) => {
   return [...todos, todo];
  },
 },
 agenda: {
  addAgendaTodo: (agenda, todo) => {
    agenda.todos = [...agenda.todos, todo];
    return agenda.todos;
  },
  add: (agenda, agendas) => {
    return [...agendas, agenda]
  },
  update: (agd, agendas) => {
    let foundAgenda = agendas.find(ele => ele.title === agd.title && ele.date === agd.date)
    foundAgenda = agd;
    return agendas
  },
  read: () => {},
  delete: () => {}
 },
};


export default functions;
import { useState } from 'react'
import Agenda from './model'

type AgendaItem = {
  title: string,
  description: string,
  date: string,
}

interface AgendaCreatorProps{
  completeAgendaCreation: Function,
  agendas: AgendaItem[]
}



const Creator = ({ completeAgendaCreation, agendas }: AgendaCreatorProps) => {
  const [agenda, setAgenda] = useState({
    title: '',
    date: '',
    description: ''
  });

  const handleForm = (e:any) => {
    let { name, value } = e.target;
    setAgenda(prevState => ({
      ...prevState,
      [name] : value
    }));
   }

   const submitForm = () => {
    const answer = window.confirm(
     'Are you sure you want to create this Agenda'
    );
  
    if(answer){
     const newAgenda = new Agenda(agenda.title, agenda.date, agenda.description);
     completeAgendaCreation(newAgenda, agendas);
     agenda.title = '';
     agenda.description = '';
     agenda.date = '';
    }
   }

 return (
  <div>
   <h1>Creating Agenda</h1>
   <div className="agenda-form">
     <div className="agenda-title">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="" onChange={(event) => handleForm(event)} value={agenda.title}/>
     </div>

     <div className="agenda-date">
      <label htmlFor="date">Date</label>
      <input type="date" name="date" id="" onChange={(event) => handleForm(event)} value={agenda.date}/>
     </div>

     <div className="agenda-description">
      <label htmlFor="description">Description:</label>
      <textarea name="description" id="" onChange={(event) => handleForm(event)} value={agenda.description}/>
     </div>

     <div className="submit-btn">
     <button type="submit" onClick={() => submitForm()}>Submit</button>
    </div>

    </div>
   </div>
 )
}

export default Creator

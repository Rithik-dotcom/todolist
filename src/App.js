//parent file
import { useState } from 'react';
import './App.css';
import Createarea from './components/Createarea';
import Notes from './components/Notes';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNotes) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        newNotes
      ]
    })
  }

  function deleteNote(id){
setNotes(prevNotes => {
  return prevNotes.filter((each, index)=>{
    return index !== id;
  })
})
  }

  return (
    <div className="App position-relative">
   

      <Createarea onAdd={addNote} />
      <div className='container row position-absolute top-50  '>
     {
      notes.map((eachNote, index)=>{
        return(
          <Notes
          
         
          key={index}
          id={index}
          title={eachNote.title}
          content={eachNote.content}
          onDelete={deleteNote}
          />
        )
      })
     }
     </div>

    </div>
  );
}

export default App;

import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add'; //icon
import Zoom from '@mui/material/Zoom'; //component api
import Fab from '@mui/material/Fab';  //component api
import './create.css'
import texture from '../assets/abc.jpg'

const Createarea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })


    const [isExpanded, setExpanded] = useState(false);
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote, //spread operator
                [name]: value
            }
        })
    };

    function expand() {
        setExpanded(true);
    };


    function handleSubmit(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault()
    }

    return (
        <div className='main-content'>
            <form className='main-form'>
               
                    {isExpanded && <input
                        id='input-main'
                        name='title' //reference of html tag
                        onChange={handleChange}
                        value={note.title}
                        placeholder='Title'
                    />}

                    <textarea
                        id='text-main'
                        name="content" //reference of html tag
                        onChange={handleChange}
                        rows={isExpanded ? 5 : 1}
                        onClick={expand}
                        placeholder='Take a note'
                        value={note.content}
                    />
                
                <Zoom in={isExpanded} >
                    <Fab onClick={handleSubmit}  >
                        <AddIcon />
                    </Fab>
                </Zoom>

            </form>
        </div>
    )
}

export default Createarea
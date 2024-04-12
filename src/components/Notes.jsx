import React from 'react'
import './create.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Notes = (props) => {

function handleClick(){
    props.onDelete(props.id)
}


    return (
     
         <div className=' col-2 note-main  pt-2 pb-2 mt-2  '>
          <div >
          <h1  >{props.title}</h1>
            <p>{props.content}</p>
           
            </div>  

            <button className='btn btn-secondary ' onClick={handleClick}>
                <DeleteForeverIcon />
            </button>
        </div>
    
    )
}

export default Notes
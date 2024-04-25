import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { useState } from 'react'
export function CreateTodo({addtodo}){
    const [title,setTitle]=useState("");
        const[description,setDescription]=useState("");
    return <div>
      <div style={{display:'flex'}}>
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Title" variant="outlined" onChange={function(e){
          setTitle(e.target.value);  
        }}/>
      
      <TextField id="standard-basic" label="Description" variant="standard" onChange={function(e){
            setDescription(e.target.value);
        }}/>
    </Box>
   

    <Box sx={{ '& > :not(style)': { m: 1 } }}>
     
      <Fab color='black' aria-label="add" onClick={function(){
    fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Specify JSON content type
        },
        body: JSON.stringify({ // Convert body object to JSON string
            title: title,
            description: description,
            completed: false
        })
    })
    .then(async function(res) {
        const json = await res.json(); // Call res.json() as a function
        alert("todo added");
        const newtodo={
            title:title,
            description:description,
            completed:false
           }
        addtodo(newtodo)
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
   
  
}}>
        <AddIcon />
      </Fab>
    </Box>
</div>

    </div>
}
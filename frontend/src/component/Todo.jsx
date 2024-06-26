import { Hidden } from "@mui/material"
import { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
export function Todo({todos,setfetchallowed}){
    const[trig,settrig]=useState(0);
    const isMobile = window.innerWidth <= 768;
    //const[todo,setodo]=useState("");
    const handleButtonClick = () => {
        setfetchallowed(true); // Toggle the state between true and false
      };
    return <div style={{display:'flex',width:'88vw',flexWrap:"wrap",marginTop:"3vh",gap:'3vw'}}>
        {todos.map(function(todo){
            return<div style={{
                width:isMobile?"70vw":'20vw',
                height:'20vh',
                display:'flex',
                borderRadius:'9px',
                alignItems:"center",
                backgroundColor:'#dda15e',
                justifyContent:'space-between',boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.4)',
                color:"black",
                overflow:'hidden'
            }}><div style={{flexDirection:'column',alignItems:'center',textAlign:'center',justifyContent:'center',paddingLeft:'5vw',width:isMobile?"45vw":"15vw",overflow:"hidden"}}>
                <h2 style={{fontSize:"3vh"}}>{todo.title}</h2>
                <div>{todo.description}</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",}}>
                <button  onClick={()=>{
                    
                    fetch("https://todo-e6lc.onrender.com/completed",{
                        method:"PUT",
                        headers:{
                             "Content-Type": "application/json"
                        },
                        body:JSON.stringify({
                            _id:todo._id
                        })
                    }).then(()=>{
                        setfetchallowed(true)
                    })
                }}>{todo.completed?<AiOutlineCheck /> :<AiOutlineClose />}</button>
                
                <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit"onClick={()=>{
                    
                    
                        fetch("https://todo-e6lc.onrender.com/delete",{
                            method:"DELETE",
                            headers: {
                                "Content-Type": "application/json" // Specify JSON content type
                            },
                            body:JSON.stringify({
                                _id:todo._id
                            })
                        }
                        ).then(()=>{
                            setfetchallowed(true);
                        })
                        
                    
                  
                }} />
                </IconButton>
             </div>
            </div>
        })}
    </div>
}
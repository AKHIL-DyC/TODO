import { Hidden } from "@mui/material"
import { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
export function Todo({todos,handleubdate}){
    //const[todo,setodo]=useState("");
    function ubdater(id){
        handleubdate(id)
    }
    return <div style={{display:'flex',width:'88vw',flexWrap:"wrap",marginTop:"3vh",gap:'3vw'}}>
        {todos.map(function(todo){
            return<div style={{
                width:'20vw',
                height:'20vh',
                display:'flex',
                borderRadius:'9px',
                alignItems:"center",
                backgroundColor:'#dda15e',
                justifyContent:'space-between',boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.4)',
                color:"black",
                overflow:'hidden'
            }}><div style={{flexDirection:'column',alignItems:'center',textAlign:'center',justifyContent:'center',paddingLeft:'5vw',}}>
                <h2>{todo.title}</h2>
                <div>{todo.description}</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <button  onClick={()=>{
                   todo._id.then((id)=>{
                    handleubdate(id)
                   })
                   //window.location.reload()//need optimisation
                   
                }}>{todo.completed?"Done" :"completed?"}</button>
                
                <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit"onClick={()=>{
                    useEffect(
                        fetch("http://localhost:3000/delete",{
                            method:"DELETE",
                            headers: {
                                "Content-Type": "application/json" // Specify JSON content type
                            },
                            body:JSON.stringify({
                                _id:todo._id
                            })
                        }
                        )
                        ,[todos]
                    )
                  
                }} />
                </IconButton>
             </div>
            </div>
        })}
    </div>
}
import { Hidden } from "@mui/material"
import { useState } from "react"

export function Todo({todos,addcomplete}){
    const[todo,setodo]=useState("");
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
                <button  onClick={(id)=>{
                    fetch("http://localhost:3000/completed",{
                        method:"PUT",
                        headers: {
                            "Content-Type": "application/json" // Specify JSON content type
                        },
                        body:JSON.stringify({
                            _id:todo._id
                        })
                    })
                    const newtodo={
                        title:todo.title,
                        description:todo.description,
                        completed:true,
                    }
                   addcomplete(newtodo) 
                   window.location.reload()//need optimisation
                   
                }}>{todo.completed?"Done" :"completed?"}</button>

            </div>
        })}
    </div>
}
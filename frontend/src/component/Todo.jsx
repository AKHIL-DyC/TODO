import { Hidden } from "@mui/material"

export function Todo({todos}){
    return <div style={{display:'flex',gap:'2vh',width:'88vw',flexWrap:"wrap",marginTop:"3vh",gap:'3vw'}}>
        {todos.map(function(todo){
            return<div style={{
                width:'20vw',
                height:'20vh',
                display:'flex',
                borderRadius:'9px',
                alignItems:"center",
                backgroundColor:'#EBECED',
                justifyContent:'space-between',boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.4)',
                color:"black",
                overflow:'hidden'
            }}><div style={{flexDirection:'column',alignItems:'center',textAlign:'center',justifyContent:'center',paddingLeft:'5vw',}}>
                <h2>{todo.title}</h2>
                <div>{todo.description}</div>
                </div>
                <button>{todo.completed?"Done" :"completed?"}</button>

            </div>
        })}
    </div>
}
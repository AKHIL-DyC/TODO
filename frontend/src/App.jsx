import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './component/Createtodo'
import { Todo } from './component/Todo'
import { Navbar } from './component/Navbar'
import { Quotes } from './component/Quotes'
import { Clock } from './component/Clock'

function App() {
  const [todos,setTodos]=useState([]);
  const [fetchallowed,setfetchallowed]=useState(true);
  const isMobile = window.innerWidth <= 768;
  useEffect(()=>{
    if(fetchallowed){
      fetch("https://todo-e6lc.onrender.com/todos")
      .then(async function(res){
      const json = await res.json();
      setTodos(json.todo);
      setfetchallowed(false)
     // setTodos((prev) => [prev, ...json.todo]) 
     // const addtodo=setTodos((prev) => [prev, ...json.todo]) 
      })
    }
    },[fetchallowed])
    
    const handleubdate=(id)=>{

      fetch("https://todo-e6lc.onrender.com/completed",{
        method:"PUT",
        headers: {
            "Content-Type": "application/json" ,
        },
        body:JSON.stringify({
            _id:id
        })
    })
   }

    const addtodo=(newtodo)=>{setTodos([...todos,newtodo])}
    //const addcomplete=(newcomplete)=>{setTodos([...todos,newcomplete])}
    //const addtodo=(newtodo)=>{setTodos((prev) => [prev, newtodo]) }
  return (
    <>
    <Navbar/>
    {console.log(fetchallowed)}
    <div style={{display:'flex',width:'100%',gap:'1vw',flexDirection:isMobile?"column":"row"}}>
    <div style={{display:'flex',justifyContent:'space-between',width:isMobile?"65vw":'70vw',flexDirection:'column',backgroundColor:"#fefae0",overflow:"hidden",flexWrap:"wrap",borderRadius:"30px",padding:"30px",  order: isMobile ? 2 : 1,}}>
      <CreateTodo addtodo={addtodo} setfetchallowed={setfetchallowed}/> 
     <Todo todos={todos} setfetchallowed={setfetchallowed}></Todo>
    </div>
    <div style={{order:1}}>
      <Clock/>
      <Quotes/>
    </div>
    </div>
    </>
  )
}

export default App

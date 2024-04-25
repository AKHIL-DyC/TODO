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
  const [todos,setTodos]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async function(res){
    const json = await res.json();
    setTodos(json.todo);
    })
    },[])
    const addtodo=(newtodo)=>{setTodos([...todos,newtodo])}
  return (
    <>
    <Navbar/>
    <div style={{display:'flex',width:'100%',gap:'1vw'}}>
    <div style={{display:'flex',justifyContent:'space-between',width:'70vw',flexDirection:'column'}}>
      <CreateTodo addtodo={addtodo}/> 
     <Todo todos={todos}></Todo>
    </div>
    <div>
      <Clock/>
    <Quotes/>
    </div>
    </div>
    </>
  )
}

export default App

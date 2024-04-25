
import { useEffect, useState } from "react";

export function Quotes(){
    const[quote,setquote]=useState("");
    const[index,setindex]=useState();
    const[author,setauthor]=useState("");
    useEffect(()=>{
        async function loader(){
            const response= await fetch("http://localhost:3000/quotes");
            const fresponse= await response.json();
            setquote(fresponse[0].q);
            setauthor(fresponse[0].a)
        } 
        loader();
        const interval = setInterval(loader, 30000);

        // Clean up interval to prevent memory leaks
        return () => clearInterval(interval);
    },[index])
    
    return<div style={{width:'20vw',backgroundColor:'#606c38',height:'50vh',color:'white',display:"flex",justifyContent:'center',alignItems:'center',borderRadius:'12px',fontSize:'3vh',overflow:"hidden"}}>
      {quote}<br></br>
      {`~`+author}
    </div>
}
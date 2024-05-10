const express=require("express");
const cors=require("cors");
const { creatTodo, ubdateTodo } = require("./types");
const {todo}=require("./db")
const app=express();
app.use(express.json());
app.use(cors());
app.post("/todo",async(req,res)=>{
    const payload=req.body;
    const zodverifiedpayload=creatTodo.safeParse(payload);
    if(!zodverifiedpayload.success){
        res.status(411).json({
            msg:"invalid input",
        })
        return
    }
    await todo.create({
        title:payload.title,
        description:payload.description,
        completed:false,
    })
    res.json({
        msg:"todo created"
    })
})
app.get("/todos",async(req,res)=>{
    const alltodo= await todo.find({});
    res.json({
        todo:alltodo
    })
})
app.put("/completed",async(req,res)=>{
    const payload=req.body;
    const verifiedpayload=ubdateTodo.safeParse(payload);
    if(!verifiedpayload.success){
        res.status(411).json({
            msg:"invalid id",
        })
        return
    }
    const todotoubate= await todo.findById(payload._id)
    if (!todotoubate) {
        return res.status(404).json({ message: "Data not found" });
    }
    todotoubate.completed=true;
    await todotoubate.save();
   res.json({
    msg:"marked as completed"
   })
})
app.delete("/delete",async(req,res)=>{
    const payload=req.body
    const verifiedpayload=ubdateTodo.safeParse(payload);
    if(!verifiedpayload.success){
        res.status(411).json({
            msg:"invalid id",
        })
        return
    }
    const todelete=await todo.findByIdAndDelete(payload._id);
    if (!todelete) {
        return res.status(404).json({ message: "Data not found" });
    }
    res.json({
        msg:"deleted successfully"
    })
})
app.get('/quotes',async(req,res)=>{
    const response= await fetch('https://zenquotes.io/api/quotes/')
    const finalresponse=await response.json()
    res.json(finalresponse)
})


app.listen('44.233.151.27',(req,res)=>{
    console.log("listening on port 3000.....")
})
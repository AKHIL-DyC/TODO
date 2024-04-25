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
app.listen(3000,(req,res)=>{
    console.log("listening on port 3000.....")
})
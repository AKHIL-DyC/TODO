const { TokenExpiredError } = require("jsonwebtoken");
const mongoose=require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://akhiljee666:akhiljee666@cluster0.2dld90x.mongodb.net/")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todo',todoSchema);
module.exports={
    todo:todo
}
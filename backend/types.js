const zod=require("zod")
const creatTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})
const ubdateTodo=zod.object({
    _id:zod.string()
})
//to export
module.exports={
    creatTodo:creatTodo,
    ubdateTodo:ubdateTodo
}
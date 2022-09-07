const express = require("express");
const toDoRouter = require('./todo/todo.router').router


const app = express();

app.use(express.json())

app.use('/api/v1',toDoRouter )



app.listen(7000, ()=>{
    console.log('Your Server is now availabe at port 7000')
}) 
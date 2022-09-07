const { getAllMyToDos, getByIdToDo, createAToDo, deleteToDo, editToDo } = require("./todo.controllers");



const getAll = (req, res) => {
    const data = getAllMyToDos()
    res.status(200).json({
        items: data.length,
        response: data
    })
}



const getById = (req, res) =>  {
    const id = Number(req.params.id)
    if(id){
        const data = getByIdToDo(id)
        if(data){
            res.status(200).json(data)
        }else{
            res.status(400).json({message: "Not a real Id"})
            
        }
    }else{
        res.status(400).json({message: "Id is a Number"})
    }
}


const createNew = (req, res) =>{
    const data = req.body
    if(data){
        createAToDo(data)
        res.status(200).json(data)
    }
}

const deleteById = (req, res) =>{
    const id = Number(req.params.id)
    if(id){
        const data = deleteToDo(id)
        if(data === true){
            res.status(200).json(data)
        }else{
            res.status(400).json({message: "Invalid Id"})
        }
    }else{
        res.status(400).json({message: "The Id Task doesn't exist"})
    }

}


const updateById = (req, res) =>{
    const id = Number(req.params.id)

    const data = req.body

    if(id){
        const item = editToDo(id, data)
        if(item){
            res.status(200).json(item)
        }else{
            res.status(406).json({message: "Invalid Id"})
        }
    }else{
        res.status(400).json({message: "This Id doesn't exists"})
    }
}


module.exports={
    getAll,
    createNew,
    getById,
    deleteById,
    updateById
}
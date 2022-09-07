const todoDB = [
    {
        id: 1,
        tittle: "Go to the GYM",
        location: "At the Deportivo Queretaro",
        complete: "Not done yet"
    },
    {
        id: 2,
        tittle: "Work at Academlo",
        location: "In My house",
        complete: "Not done yet"
    },
    {
        id: 3,
        tittle: "Study Chinese",
        location: "Zoom ",
        complete: "Not done yet"
    },
];


/*{
    id: , 
    tittle: "",
    location: "",
    complete: ""
}*/




const getAllMyToDos = () => {
    return todoDB
}




/*This is the controller for getting by ID  */

const getByIdToDo = (id) => {
    const filterToDoDB = todoDB.filter((todoITEM) => todoITEM.id === id);
    return filterToDoDB[0];
}




/*For creating a New ToDo in the List */
const createAToDo = (todoObj) => {

    if (todoDB.length === 0) {
        const newToDo = {
            id: 1,
            title: todoObj.title,
            location: todoObj.location,
            complete: todoObj.complete,
        };
        todoDB.push(newToDo);
        return newToDo;
    }
    const newToDo = {
        id: todoDB[todoDB.length - 1].id + 1,
        title: todoObj.title,
        location: todoObj.location,
        complete: todoObj.complete,
    };
    todoDB.push(newToDo);
    return newToDo;
};

/*For deleting a TodoList */


const deleteToDo = (id) => {
    const index = todoDB.findIndex(item => item.id === id)
    if (index !== -1) {
        todoDB.splice(index, 1)
        return true
    }
    return false
};

/*For updating the TO Do to complete or not completed */

const editToDo = (id, data) => {
    const index = todoDB.findIndex(item => item.id === id)
    if (data.complete !== undefined) {
        todoDB[index] = {
            id,
            tittle: data[index].title,
            location: data[index].location,
            complete: data.complete
        }

    }
    return todoDB[index]
};


module.exports = {
    getAllMyToDos,
    getByIdToDo,
    createAToDo,
    deleteToDo,
    editToDo
};
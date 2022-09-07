const router = require('express').Router()
const httpToDo = require('./todo.http')



router.route('/todo')
    .get(httpToDo.getAll)
    .post(httpToDo.createNew)


router.route('/todo/:id')
    .get(httpToDo.getById)
    .put(httpToDo.updateById)
    .delete(httpToDo.deleteById)


module.exports={
    router
}
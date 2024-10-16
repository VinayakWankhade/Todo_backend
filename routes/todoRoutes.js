const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {deleteTodo,deleteTodoById} = require("../controllers/deleteTodo");

router.post('/createTodo', createTodo);
router.get('/getTodo', getTodo);
router.get('/getTodo/:id', getTodoById);
router.delete('/deleteTodo', deleteTodo);
router.delete('/deleteTodo/:id', deleteTodoById);

module.exports = router;

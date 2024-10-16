const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");

router.post('/createTodo', createTodo);
router.get('/getTodo', getTodo);
router.get('/getTodo/:id', getTodoById);
// router.delete('/deleteTodo', deleteTodo);

module.exports = router;

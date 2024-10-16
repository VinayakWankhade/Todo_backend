const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        const deleteTodo = await Todo.deleteMany({});
        res.status(201).json({
            success: true,
            data: deleteTodo,
            message: "Todo deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in todo deletion",
        });
    }
};

exports.deleteTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteTodo = await Todo.findByIdAndDelete({_id: id});
        const remainingTodo = await Todo.find({});
        res.status(201).json({
            success: true,
            data: remainingTodo,
            message: "Todo deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in todo deletion",
        });
    }
};

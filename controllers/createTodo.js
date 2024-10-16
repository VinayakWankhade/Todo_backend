const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = await Todo.create({ title, description });
        res.status(201).json({
            success: true,
            data: newTodo,
            message: "Todo created successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error creating todo",
        });
    }
};

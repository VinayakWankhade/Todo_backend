const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
    try {
        const getTodo = await Todo.find({});
        res.status(201).json({
            success: true,
            data: getTodo,
            message: "Todo getted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in getting todo",
        });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const {id} = req.params;
        const getTodoById = await Todo.findById({_id: id});
        res.status(201).json({
            success: true,
            data: getTodoById,
            message: "Todo getted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in getting todo",
        });
    }
};
const todo = require("./models/todo");

exports.updatetodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description, completed} = req.body;

        const todo = await todo.findByIdAndUpdate(
            {
            _id: id,
        },
        {
            title,
            description,
            updatedAt: Date.now(),
        },
        )
        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo updated successfully"
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message
        });
    }
}
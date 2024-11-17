import Task from "../models/Task.mjs"

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        console.log(tasks);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const addTask = async (req, res) => {
    try {
        const { title } = req.body;
        console.log(title);
        const completed = false;
        const task = new Task({ title, completed });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body.task, { new: true });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message() });
    }
};

export {
    getTasks,
    addTask,
    updateTask,
    deleteTask
};

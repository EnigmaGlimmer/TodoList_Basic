import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import TodoItem from "./TodoItem";
import taskService from "../services/taskService"

function TodoList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await taskService.getTasks();
            setTasks(response.data);
        } catch (error) {
            console.error("Fetching data Error", error);
        }
    };

    const addTask = async (taskName) => {
        try {
            const response = await taskService.addTask(taskName);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.log("Adding data Error", error);
        }
    };

    const toggleComplete = async (_id) => {
        const task = tasks.find((task) => task._id === _id);
        if (task) {
            try {
                const updateTask = { ...task, completed: !task.completed };
                await taskService.toggleComplete(_id);
                setTasks(tasks.map((task) => (task._id === _id ? updateTask : task)));
            } catch (error) {
                console.log("ToggleComplete Error", error);
            }
        }
    };

    const handleEdit = async (_id, task) => {
        const newTaskName = prompt("Edit taskName", task.title);
        if (newTaskName !== null && newTaskName !== "") {
            try {
                const updateTask = { ...task, title: newTaskName };
                await taskService.updateTask(_id, updateTask);
                setTasks(tasks.map((t) => (t._id === task._id ? updateTask : t)));
            } catch (error) {
                console.log("Update data Error!", error);
            }
        }
    };

    const handleDelete = async (_id) => {
        try {
            await taskService.deleteTask(_id);
            setTasks(tasks.filter((task) => task._id !== _id));
        } catch (error) {
            console.log("Delete the Task Error", error);
        }
    };

    return (
        <>
            <AddTask addTask={addTask} />
            {tasks.map((task) =>
                <TodoItem
                    key={task._id}
                    task={task}
                    toggleComplete={toggleComplete}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            )}
        </>
    );
}

export default TodoList;
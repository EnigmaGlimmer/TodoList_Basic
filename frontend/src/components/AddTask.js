import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function AddTask({ addTask }) {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName) {
            addTask(taskName);
            setTaskName('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", marginBottom: 3 }}>
            <TextField
                variant="outlined"
                label="New Task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" sx={{ marginLeft: 2 }}>
                Add Task
            </Button>
        </Box>
    );
};
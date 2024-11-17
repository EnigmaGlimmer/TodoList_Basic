import { Box, Card, CardContent, Checkbox, IconButton, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material"

function TodoItem({ task, toggleComplete, handleEdit, handleDelete }) {
  return (
    <>
      <Card variant="outlined" sx={{ marginBottom: 2 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={task.completed}
              onChange={() => toggleComplete(task._id)}
            />
            <Typography
              variant="body1"
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
              {task.title}
            </Typography>
          </Box>
          <div>
            <IconButton onClick={() => handleEdit(task._id, task)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => handleDelete(task._id)}>
              <Delete />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default TodoItem;

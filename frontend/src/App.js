import { Container, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import TodoList from "./components/TodoList";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Todo List
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TodoList />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;

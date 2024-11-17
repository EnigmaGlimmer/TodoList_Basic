import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.mjs';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.mjs';

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhoust:${PORT}`);
});
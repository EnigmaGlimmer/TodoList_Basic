import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, require: true },
    completed: { type: Boolean, require: false }
});

export default mongoose.model('Task', taskSchema);
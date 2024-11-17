import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected!");
    } catch (error) {
        console.error("MongoDB Connect Error", error);
        process.exit(1);
    }
};

export { connectDB };
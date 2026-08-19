import mongoose from 'mongoose'

const connectDB = async (req, res) => {
    mongoose.connect("mongodb+srv://anshafthanish_db_user:cXKlvNvcVG9fWSaO@cluster0.aunej4v.mongodb.net/jobish")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
};

export default connectDB;
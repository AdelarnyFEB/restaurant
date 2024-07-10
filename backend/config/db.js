import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://larny:3pleade@cluster0.sjfb4ml.mongodb.net/food-del"
    ).then(() => console.log("DB Connected"));
}
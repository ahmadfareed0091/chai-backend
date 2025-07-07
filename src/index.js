import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express"; // ✅ Add this line



dotenv.config({ 
    path: './.env' 
});

const app = express(); // ✅ Define the app

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error("ERROR: ", err);  
});

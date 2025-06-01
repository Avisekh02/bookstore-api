const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongodb");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/Books",require("./routes/bookRoutes"));

const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>{console.log(`Server is Running at ${PORT}`)});

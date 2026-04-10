require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("DB Connected"))
.catch(()=> console.log("DB Error"));

app.get("/", (req,res)=>{
  res.send("Server Running");
});

app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
const taskRoutes = require("./routes/tasks");
app.use("/api/tasks", taskRoutes);
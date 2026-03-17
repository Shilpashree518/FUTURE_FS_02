const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/crm")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const leadRoutes = require("./routes/leadRoutes");
app.use("/api/leads", leadRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
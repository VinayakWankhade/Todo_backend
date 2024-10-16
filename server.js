const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const dbConnect = require("./config/database");
dbConnect();

const todoRoutes = require("./routes/todoRoutes");
app.use('/api/v1',todoRoutes);

app.listen(PORT,() => {
    console.log(`Server is listening to the port ${PORT}`);
});

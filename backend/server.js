const express = require("express"),
    cors = require("cors"),
    mongoose = require("mongoose"),
    exerciseRouter = require("./routes/exercises"),
    userRouter = require("./routes/users");

require("dotenv").config();

const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

// connect to mongodb
const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to DB successfully");
})

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})
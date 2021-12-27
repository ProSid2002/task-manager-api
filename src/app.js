const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const cors = require("cors");
const path = require("path");
require("./db/mongoose");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("index.html");
});

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;

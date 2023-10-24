const express = require("express");
const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const Date = require("./models/datesModel");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is bin server");
});

app.get("/dates", async (req, res) => {
  try {
    const entries = await Date.find({});
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
});

app.get("/dates/:id", async (req, res) => {
  const id = req.params.id;
  let content;

  try {
    //fetch date by id
  } catch (err) {
    return res.sendStatus(404);
  }

  res.json({
    content: content,
  });
});

app.post("/dates", async (req, res) => {
  const id = uuid();
  const date = req.body.date;
  const bin = req.body.bin;

  if (!date || !bin) {
    return req.sendStatus(400);
  }

  try {
    const entry = await Date.create({ date, bin });
    res.status(201).json(entry);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://wabawden:o6vNnQ96Cjy0xVLC@cluster0.b3clvfr.mongodb.net/bin-api?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB..");
    // app.listen(3000, () => console.log("API server is running..."));
    module.exports = app;
  })
  .catch((error) => {
    console.log(error);
  });

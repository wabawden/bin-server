const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

app.get("/dates", (req, res) => {
  res.json({
    id: "id",
    date: "date",
    bins: "bins",
  });
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

  // save entry

  res.status(201).json({ id: id, date: date, bin: bin });
});

app.listen(3000, () => console.log("API server is running..."));

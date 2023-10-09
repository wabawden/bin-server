const mongoose = require("mongoose");

const datesSchema = mongoose.Schema({
  date: {
    type: String,
    required: [true, "please provide a date"],
  },
  bin: {
    type: Number,
    required: [true, "please provide a bin type"],
  },
});

const Date = mongoose.model("Date", datesSchema);

module.exports = Date;

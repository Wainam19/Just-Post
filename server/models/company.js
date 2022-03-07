const mongoose = require("mongoose");

var Company = mongoose.model("Company", {
  name: { type: String },
  code: { type: String },
  description: { type: String },
});

module.exports = { Company };

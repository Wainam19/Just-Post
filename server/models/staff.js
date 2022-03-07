const mongoose = require("mongoose");

var Staff = mongoose.model("Staff", {
  staffId: { type: Number },
  name: { type: String },
  gender: { type: String },
  email: { type: String },
  phone: { type: String },
  company: { type: String },
});

module.exports = { Staff };

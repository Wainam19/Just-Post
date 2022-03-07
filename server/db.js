const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/JustPost", (err) => {
  if (!err) {
    console.log("Connect Successfully!");
  } else {
    console.log(
      "Error in DB Connection : " + JSON.stringify(err, undefined, 2)
    );
  }
});

module.exports = mongoose;

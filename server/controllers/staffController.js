const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Staff } = require("../models/Staff");

router.get("/", (req, res) => {
  if (req.query.staffId) {
    Staff.find({ staffId: req.query.staffId }, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log(
          "Error in Retriving Staff :" + JSON.stringify(err, undefined, 2)
        );
      }
    });
  } else if (req.query.company) {
    Staff.find(
      { company: { $regex: req.query.company, $options: "i" } },
      (err, docs) => {
        if (!err) {
          res.send(docs);
        } else {
          console.log(
            "Error in Retriving Staff :" + JSON.stringify(err, undefined, 2)
          );
        }
      }
    );
  } else {
    Staff.find((err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log(
          "Error in Retriving Staff :" + JSON.stringify(err, undefined, 2)
        );
      }
    });
  }
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Staff.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Staff :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  var stf = new Staff({
    staffId: req.body.staffId,
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    company: req.body.company,
  });
  stf.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Saving Staff :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var stf = {
    staffId: req.body.staffId,
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    company: req.body.company,
  };
  Staff.findByIdAndUpdate(
    req.params.id,
    { $set: stf },
    { new: true },
    (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log(
          "Error in Updating Staff :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Staff.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Deleting Staff :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;

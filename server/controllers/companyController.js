const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Company } = require("../models/Company");

router.get("/", (req, res) => {
  if (req.query.code) {
    Company.find(
      { code: { $regex: req.query.code, $options: "i" } },
      (err, docs) => {
        if (!err) {
          res.send(docs);
        } else {
          console.log(
            "Error in Retriving Company :" + JSON.stringify(err, undefined, 2)
          );
        }
      }
    );
  } else if (req.query.name) {
    Company.find(
      { name: { $regex: req.query.name, $options: "i" } },
      (err, docs) => {
        if (!err) {
          res.send(docs);
        } else {
          console.log(
            "Error in Retriving Company :" + JSON.stringify(err, undefined, 2)
          );
        }
      }
    );
  } else {
    Company.find((err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log(
          "Error in Retriving Company :" + JSON.stringify(err, undefined, 2)
        );
      }
    });
  }
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Company.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Company :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  var cpy = new Company({
    name: req.body.name,
    code: req.body.code,
    description: req.body.description,
  });
  cpy.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Saving Company :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var cpy = {
    name: req.body.name,
    code: req.body.code,
    description: req.body.description,
  };
  Company.findByIdAndUpdate(
    req.params.id,
    { $set: cpy },
    { new: true },
    (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log(
          "Error in Updating Company :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Company.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Deleting Company :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();
var Registration = require("../models/registration");

router.post("/", (req, res) => {
  var user = new Registration();

  let { name, age, dob, profession, locality, guests, address } = req.body;

  console.log(name, age, dob, profession, locality, guests, address,"data");
  console.log(user,"user")
  user.name = name;
  user.age = age;
  user.dob = dob;
  user.profession = profession;
  user.locality = locality;
  user.guests = guests;
  user.address = address;

  user.save(function (err, data) {
    if (err) {
      res.send("Error occured while registration");
    } else {
      console.log(data,"dsf");
      res.json({ error: false, message: "registration successful" });
    }
  });
});

module.exports = router;

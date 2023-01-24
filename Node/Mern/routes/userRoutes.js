const express = require("express");
const User = require("../model/User");

const router = express.Router();


// add new User
router.post("/add", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = new User({ name, email, phone });
    await newUser.save();
    res.status(200).send(newUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//get all users

router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ msg: "all users", users });
  } catch (error) {
    res.status(400).send({errors :{msg: "can not get the list of the users", error }});
  }
});
// get one user
router.get("/get-one/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await User.findOne({ _id });
    res.status(200).send(getUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete user
router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await User.findByIdAndDelete({ _id });
    res.status(200).send({ msg: "user deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
});

//  update user
router.put("/edit/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await User.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "user updated ..." });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

const express = require("express");
const { findByIdAndDelete } = require("../model/Contact");
const Contact = require("../model/Contact");

const router = express.Router();
router.get("/test", (req, res) => {
  try {
    res.send("helloooooo");
  } catch (error) {
    console.log(error);
  }
});
// add new contact
router.post("/add", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(200).send(newContact);
  } catch (err) {
    res.status(400).send(err);
  }
});
//get all contact

router.get("/all", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send({ msg: "all contacts", contacts });
  } catch (error) {
    res.status(400).send({errors :{msg: "can not get", error }});
  }
});
// get one contact
router.get("/get-one/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getContact = await Contact.findOne({ _id });
    res.status(200).send(getContact);
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete contact
router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Contact.findByIdAndDelete({ _id });
    res.status(200).send({ msg: "contact deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
});

//  update contact
router.put("/edit/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Contact.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "contact updated ..." });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

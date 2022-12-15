const express = require("express");
const { login } = require("../controllers/loginUser");
const { register } = require("../controllers/registerUser");
const { getUsers, updateUser, deleteUser } = require("../controllers/user");
const { registerValidator, loginValidation, validation } = require("../middelware/validator");

const router = express.Router();

router.post("/register", registerValidator(), validation, register);

router.post("/login", loginValidation() , validation, login);

router.get('/get-all', validation, getUsers)

router.put("/edit/:id", validation, updateUser)

router.delete("delete/:id", validation, deleteUser)
module.exports = router;

const express = require("express");
const { signup, signin } = require("../Controllers/userController");

const userRoter = express.Router();

userRoter.post("/signup", signup);

userRoter.post("/signin", signin)

module.exports = userRoter;
const express = require("express");

const userRoter = express.Router();

userRoter.post("/signup", (req, res) => {
    res.send("signup");
})

userRoter.post("/signin", (req, res) => {
    res.send("signin");

})

module.exports = userRoter;
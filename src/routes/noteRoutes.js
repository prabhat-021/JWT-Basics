const express = require("express");

const noteRoter = express.Router();

noteRoter.get("/", (req, res) => {
    res.send("NOTE GET REQUEST");
})

noteRoter.post("/signin", (req, res) => {
    res.send("NOTE POST REQUEST");

})

module.exports = noteRoter;
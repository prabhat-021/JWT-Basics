const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        })

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
        res.status(201).json({ user: result, token: token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const signin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existingUser1 = await userModel.findOne({ email: email });
        if (!existingUser1) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const matchPassword = await bcrypt.compare(password, existingUser1.password);
        if (!matchPassword) {
            res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ email: existingUser1.email, id: existingUser1._id }, SECRET_KEY);
        res.status(201).json({ user: existingUser1, token: token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { signin, signup };
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json({ token: generateToken(user._id) });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        res.status(200).json({ token: generateToken(user._id) });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getDashboard = async (req, res) => {
    res.status(200).json({ message: "Welcome to the Dashboard" });
};
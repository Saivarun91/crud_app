const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/crud-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String
});

const User = mongoose.model('User', userSchema);

// CREATE
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ (all users)
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ (single user)
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE
app.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (user) {
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// LOGIN
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Insert login logic here (e.g., check credentials in the database)
    res.status(200).send('Login successful');
});

// SIGNUP
app.post('/signup', async (req, res) => {
    const { name, email, age, password } = req.body;
    try {
        const user = new User({ name, email, age, password });
        await user.save();
        res.status(200).send('Signup successful');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});




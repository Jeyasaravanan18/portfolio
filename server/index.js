const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio-game', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'Online', system: 'Gamified Portfolio', integrity: '100%' });
});

const Message = require('./models/Message');

app.post('/api/contact', async (req, res) => {
    try {
        const { sender, message } = req.body;
        const newMessage = new Message({ sender, content: message });
        await newMessage.save();
        res.status(201).json({ success: true, message: 'Transmission received' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Transmission failed' });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;

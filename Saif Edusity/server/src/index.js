const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const path = require('path');

// Routes
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/payments', paymentRoutes);

// Serve static files from the React app
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client', 'dist', 'index.html'));
    });
} else {
    // Basic Route for development
    app.get('/', (req, res) => {
        res.send('Edusity API is running...');
    });
}

// Database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

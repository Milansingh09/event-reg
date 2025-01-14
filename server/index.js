const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const receipt = require('receipt');
const cors = require('cors');
const RegistrationModel = require('./models/Registration'); // Adjust the path to your model

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors()); // Use CORS middleware
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mba', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid conflicts
    },
});

const upload = multer({ storage });

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle registration and file upload
app.post('/register', upload.single('receipt'), (req, res) => {
    const registrationData = {
        participant1Name: req.body.participant1Name,
        whatsapp1: req.body.whatsapp1,
        participant2Name: req.body.participant2Name,
        whatsapp2: req.body.whatsapp2,
        participant3Name: req.body.participant3Name,
        whatsapp3: req.body.whatsapp3,
        email: req.body.email,
        transactionId: req.body.transactionId,
        receipt: req.file.receipt // Save the path of the uploaded file
    };

    const registration = new RegistrationModel(registrationData);
    registration.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(400).json({ errors: err }));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
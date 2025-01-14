const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const RegistrationModel = require("./models/Registration");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/mba", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Multer Setup for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file
  },
});

const upload = multer({ storage });

// Ensure uploads directory exists
const fs = require("fs");
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

// Endpoint to handle registration and file upload
app.post("/register", upload.single("receipt"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Receipt file is required." });
    }

    const registrationData = {
      participant1Name: req.body.participant1Name,
      whatsapp1: req.body.whatsapp1,
      participant2Name: req.body.participant2Name,
      whatsapp2: req.body.whatsapp2,
      participant3Name: req.body.participant3Name,
      whatsapp3: req.body.whatsapp3,
      email: req.body.email,
      transactionId: req.body.transactionId,
      receipt: req.file.path, // Save the file path
      size: req.file.size, // Save file size
    };

    const registration = new RegistrationModel(registrationData);
    const savedRegistration = await registration.save();
    res.status(201).json(savedRegistration);
  } catch (error) {
    res.status(500).json({ error: "Failed to register", details: error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

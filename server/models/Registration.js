const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  participant1Name: { type: String, required: true },
  whatsapp1: { type: String, required: true },
  participant2Name: { type: String, required: true },
  whatsapp2: { type: String, required: true },
  participant3Name: { type: String, required: true },
  whatsapp3: { type: String, required: true },
  email: { type: String, required: true },
  transactionId: { type: String, required: true },
  receipt: { type: String, required: true }, // Path to the uploaded file
  size: { type: Number, required: true }, // File size
});

const RegistrationModel = mongoose.model("Registration", registrationSchema);

module.exports = RegistrationModel;

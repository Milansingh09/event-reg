const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    participant1Name: { type: String, required: true },
    whatsapp1: { type: String, required: true },
    participant2Name: { type: String, required: true },
    whatsapp2: { type: String, required: true },
    participant3Name: { type: String, required: true },
    whatsapp3: { type: String, required: true },
    email: { type: String, required: true },
    transactionId: { type: String, required: true },
    receipt: { type: String, required: true } // This will store the file path of the uploaded image
});

// Create a model from the schema
const RegistrationModel = mongoose.model("Registration", registrationSchema);

// Export the model
module.exports = RegistrationModel;
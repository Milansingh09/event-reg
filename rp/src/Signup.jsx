import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    // State variables for participant details and payment information
    const [participant1Name, setParticipant1Name] = useState('');
    const [whatsapp1, setWhatsapp1] = useState('');
    const [participant2Name, setParticipant2Name] = useState('');
    const [whatsapp2, setWhatsapp2] = useState('');
    const [participant3Name, setParticipant3Name] = useState('');
    const [whatsapp3, setWhatsapp3] = useState('');
    const [email, setEmail] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [receipt, setReceipt] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { participant1Name, whatsapp1, participant2Name, whatsapp2, participant3Name, whatsapp3, email, transactionId, receipt })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-50">
                <h2>New Registration for Ridhi Club</h2>
                <form onSubmit={handleSubmit}>
                    {/* Participant 1 Details */}
                    <div className="mb-3">
                        <label htmlFor="participant1Name">
                            <strong>Participant 1 Name</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Participant 1 Name"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setParticipant1Name(e.target.value)}
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="whatsapp1">
                            <strong>Contact Number (WhatsApp)</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter WhatsApp Number"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setWhatsapp1(e.target.value)}
                            required />
                    </div>

                    {/* Participant 2 Details */}
                    <div className="mb-3">
                        <label htmlFor="participant2Name">
                            <strong>Participant 2 Name</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Participant 2 Name"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setParticipant2Name(e.target.value)}
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="whatsapp2">
                            <strong>Contact Number (WhatsApp)</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter WhatsApp Number"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setWhatsapp2(e.target.value)}
                            required />
                    </div>

                    {/* Participant 3 Details */}
                    <div className="mb-3">
                        <label htmlFor="participant3Name">
                            <strong>Participant 3 Name</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Participant 3 Name"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setParticipant3Name(e.target.value)}
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="whatsapp3">
                            <strong>Contact Number (WhatsApp)</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter WhatsApp Number"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setWhatsapp3(e.target.value)}
                            required />
                    </div>

                    {/* Email ID for Registration */}
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email ID for Registration</strong>
                        </label>
                        <input type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>

                    {/* Payment Transaction ID */}
                    <div className="mb-3">
                        <label htmlFor="transactionId">
                            <strong>Payment Transaction ID</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Payment Transaction ID"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setTransactionId(e.target.value)}
                            required />
                    </div>

                    {/* Upload Receipt */}
                    <div className="mb-3">
                        <label htmlFor="receipt">
                            <strong>Upload Screenshot of Transaction/Receipt (Image Only)</strong>
                        </label>
                        <input type="file"
                            name="receipt"
                            className="form-control rounded-0"
                            accept="image/*" // Accept only image files
                            onChange={(e) => setReceipt(e.target.files[0])}
                            required />
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Submit Registration
                    </button>
                </form>
                <p>Login ID will be sent directly to the registered email once the transaction is verified.</p>
                <p>If you need assistance with accommodation for out-of-Chennai members, contact (________).</p>
                <p>Already have an Account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
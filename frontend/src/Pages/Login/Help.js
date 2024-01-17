// Help.js

import React, { useState, useContext } from "react";
import "./Help.css"; // Import your CSS for styling
import Chat from "../../Components/Chat";
// import { Link } from "@react-navigation/native";
// import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Help = () => {
    const { isLoggedIn, userr, checkUserLoggedIn } = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { anonymous, companyName, pinata, filteredCompanies } = state || {};
    const [contactLanguage, setContactLanguage] = useState("");
    const [preferredContactMethod, setPreferredContactMethod] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneExtension, setPhoneExtension] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [showChat, setShowChat] = useState(false);

    const handleContactLanguageChange = (event) => {
        setContactLanguage(event.target.value);
    };

    const handleContactMethodChange = (event) => {
        setPreferredContactMethod(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneExtensionChange = (event) => {
        setPhoneExtension(event.target.value);
    };

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            if (!isLoggedIn) {
                alert("You are not logged in.");
                return;
                // return navigate("/login");
            }

            // Open a new tab or window for chat based on user preference
            const data = {
                preferredContactMethod,
                preferedLanguage: contactLanguage,
                anonymous,
                companyName,
                email: userr.email,
                name: userr.name,
                phone: userr.phone,
                createdBy: userr._id,
                pinataIPFS: pinata.IpfsHash,
                // filteredCompanies,
                // Add phoneNumber, phoneExtension, and countryCode if applicable
            };

            console.log(data);
            const response = await axios.post('http://localhost:8800/api/complain/', data);
            console.log(response.data);
            alert('successful');

            switch (preferredContactMethod) {
                case "chat":
                    setShowChat(true);
                    break;
                case "web":
                    navigate("/case");
                    break;
                case "phone":
                    navigate("/thanks");
                    break;
                default:
                    // Handle unexpected method or show an error message
                    console.error(
                        `Invalid contact method: ${preferredContactMethod}`
                    );
                    break;
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="page-container">
            <div className="help-container">
                <div className="help-content">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label
                                htmlFor="contactLanguage"
                                className="form-label"
                            >
                                Preferred Contact Language:
                            </label>
                            <select
                                id="contactLanguage"
                                className="form-select"
                                value={contactLanguage}
                                onChange={handleContactLanguageChange}
                            >
                                <option value="">Select Language</option>
                                <option value="english">English</option>
                                <option value="spanish">Spanish</option>
                                {/* Add more language options */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">
                                Preferred Contact Method:
                            </label>
                            <div className="form-radio-label">
                                <input
                                    type="radio"
                                    id="web"
                                    name="contactMethod"
                                    value="web"
                                    className="form-radio-input"
                                    checked={preferredContactMethod === "web"}
                                    onChange={handleContactMethodChange}
                                />
                                <label htmlFor="web">Web</label>
                            </div>
                            <div className="form-radio-label">
                                <input
                                    type="radio"
                                    id="phone"
                                    name="contactMethod"
                                    value="phone"
                                    className="form-radio-input"
                                    checked={preferredContactMethod === "phone"}
                                    onChange={handleContactMethodChange}
                                />
                                <label htmlFor="phone">Phone</label>
                            </div>
                            <div className="form-radio-label">
                                <input
                                    type="radio"
                                    id="chat"
                                    name="contactMethod"
                                    value="chat"
                                    className="form-radio-input"
                                    checked={preferredContactMethod === "chat"}
                                    onChange={handleContactMethodChange}
                                />
                                <label htmlFor="chat">Chat</label>
                            </div>
                        </div>

                        {preferredContactMethod === "phone" && (
                            <>
                                <div className="form-group">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="form-label"
                                    >
                                        Phone Number:
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        className="form-select"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="phoneExtension"
                                        className="form-label"
                                    >
                                        Phone Extension:
                                    </label>
                                    <input
                                        type="text"
                                        id="phoneExtension"
                                        className="form-select"
                                        value={phoneExtension}
                                        onChange={handlePhoneExtensionChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="countryCode"
                                        className="form-label"
                                    >
                                        Country Code:
                                    </label>
                                    <input
                                        type="text"
                                        id="countryCode"
                                        className="form-select"
                                        value={countryCode}
                                        onChange={handleCountryCodeChange}
                                    />
                                </div>
                            </>
                        )}

                        <button type="submit" className="help-form-button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {showChat && (
                <Chat username="User123" onClose={() => setShowChat(false)} />
            )}
        </div>
    );
};

export default Help;

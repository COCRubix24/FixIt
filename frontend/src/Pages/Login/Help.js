// Help.js

import React, { useState } from "react";
import "./Help.css"; // Import your CSS for styling
import Chat from "../../Components/Chat";

const Help = () => {
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

    const handleSubmit = (event) => {
        event.preventDefault();

        // Open a new tab or window for chat based on user preference
        if (preferredContactMethod === "chat") {
            setShowChat(true);
        } else {
            // Handle other contact methods
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

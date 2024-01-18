import React, { useState } from "react";

const SupportComponent = ({ onSupportConnect }) => {
    const [userSupportInput, setUserSupportInput] = useState("");

    const handleSupportConnect = () => {
        // Placeholder logic for connecting with the support team
        // You can add more specific logic here, such as initiating a support chat

        // Inform the parent component that support connection is initiated
        onSupportConnect();
    };

    return (
        <div>
            <div>
                <p>Contact our support team. Type your message below:</p>
                <input
                    type="text"
                    value={userSupportInput}
                    onChange={(e) => setUserSupportInput(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleSupportConnect}>
                    Connect with Support
                </button>
            </div>
        </div>
    );
};

export default SupportComponent;

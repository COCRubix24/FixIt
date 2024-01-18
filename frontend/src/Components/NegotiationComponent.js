import React, { useState } from "react";

const NegotiationComponent = ({ onNegotiationComplete }) => {
    const [negotiationHistory, setNegotiationHistory] = useState([]);
    const [userNegotiationInput, setUserNegotiationInput] = useState("");

    const handleUserNegotiationInput = () => {
        // Placeholder logic for handling user negotiation input
        setNegotiationHistory([
            ...negotiationHistory,
            { role: "user", text: userNegotiationInput },
        ]);
        // You can add more specific logic here

        // Placeholder for the chatbot's response
        setNegotiationHistory([
            ...negotiationHistory,
            { role: "chatbot", text: "I received your negotiation input." },
        ]);
    };

    const handleNegotiationCompletion = () => {
        // Placeholder logic for completing the negotiation
        // You can add more specific logic here

        // Inform the parent component that negotiation is complete
        onNegotiationComplete();
    };

    return (
        <div>
            <div>
                {negotiationHistory.map((message, index) => (
                    <div key={index} className={message.role}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={userNegotiationInput}
                    onChange={(e) => setUserNegotiationInput(e.target.value)}
                />
                <button onClick={handleUserNegotiationInput}>Send</button>
                <button onClick={handleNegotiationCompletion}>
                    Complete Negotiation
                </button>
            </div>
        </div>
    );
};

export default NegotiationComponent;

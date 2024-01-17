// Chat.js

import React from "react";
import "./Chat.css"; // Import your CSS for styling

const Chat = ({ username, onClose }) => {
    const predefinedOptions = [
        "Product Information",
        "Order Status",
        "Technical Support",
    ];

    const handleOptionClick = (option) => {
        // Handle the selected option, you can perform actions based on the chosen option
        console.log(`Selected option: ${option}`);
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <span className="close-icon" onClick={onClose}>
                    &times;
                </span>
                <h3>Welcome, {username}!</h3>
            </div>
            <div className="chat-body">
                <p>How can I assist you today?</p>
                <p>Choose one of the options below:</p>
                <ul>
                    {predefinedOptions.map((option, index) => (
                        <li key={index}>
                            <button onClick={() => handleOptionClick(option)}>
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chat-footer">
                {/* Add your chat input and send button here */}
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
            </div>
        </div>
    );
};

export default Chat;

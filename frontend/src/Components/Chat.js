import React, { useState } from "react";
import "./Chat.css"; // Import your CSS for styling


const Chat = ({ username, onClose }) => {
    const [inputMessage, setInputMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const handleOptionClick = (option) => {
        // Handle the selected option, you can perform actions based on the chosen option
        console.log(`Selected option: ${option}`);
    };

    const handleSendMessage = () => {
        // Simulate a chatbot response based on the user's input
        const userMessage = {
            sender: "user",
            message: inputMessage,
        };

        // Simulate a chatbot response based on predefined logic
        const botResponse = getBotResponse(inputMessage);

        const botMessage = {
            sender: "bot",
            message: botResponse,
        };

        setChatHistory([...chatHistory, userMessage, botMessage]);
        setInputMessage(""); // Clear the input field
    };

    const getBotResponse = (userInput) => {
        // Define predefined responses based on the user's input or context
        if (
            userInput.toLowerCase().includes("cloths") &&
            userInput.toLowerCase().includes("defected")
        ) {
            return "I'm sorry to hear about the issue with the clothes. Could you please provide more details so that I can assist you better?";
        }

        // Default response for unrecognized input
        return "I'm here to help. Please let me know how I can assist you.";
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
                {/* Render the chat history */}
                {chatHistory.map((message, index) => (
                    <div
                        key={index}
                        className={`chat-message ${message.sender}`}
                    >
                        {message.message}
                    </div>
                ))}
            </div>
            <div className="chat-footer">
                {/* Add your chat input and send button here */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;

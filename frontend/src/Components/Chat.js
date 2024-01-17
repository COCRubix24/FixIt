// Chat.js

import React from "react";
import "./Chat.css"; // Import your CSS for styling

const Chat = ({ username, onClose }) => {
    return (
        <div className="chat-window">
            <div className="chat-header">
                <span className="close-icon" onClick={onClose}>
                    &times;
                </span>
                <h3>Welcome, {username}!</h3>
            </div>
            <div className="chat-body">
                {/* Add your chat content here */}
                <p>This is the chat window content.</p>
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

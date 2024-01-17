// LP.js

import React, { useState } from "react";
import Chat from "../../Components/Chat"; // Import your Chat component
import "./LP.css"; // Import your CSS for styling

const LP = () => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };
    console.log(showChat);
    return (
        <div>
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>
                        Our Consumer Complaint Solution System empowers users to
                        efficiently register and resolve complaints, ensuring a
                        fair and responsive mechanism for addressing product or
                        service-related issues.
                    </p>
                </section>
                <section>
                    <h2>Trusted Partners</h2>
                    <p>
                        We collaborate with trusted partners to provide you with
                        the best solutions. Our partners include industry
                        leaders committed to consumer satisfaction.
                    </p>
                    {/* Add your trusted partners' information here */}
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or need further assistance,
                        feel free to contact our support team at
                        support@example.com.
                    </p>
                </section>
            </main>
            <div className="chat-icon" onClick={toggleChat}>
                <span>Chat</span>
            </div>

            {showChat && <Chat username="User123" onClose={toggleChat} />}
            {/* Pass onClose prop to handle chat window close */}
        </div>
    );
};

export default LP;

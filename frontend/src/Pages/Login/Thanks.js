// Thanks.js

import React from "react";

const Thanks = () => {
    const containerStyle = {
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    };

    return (
        <div style={containerStyle}>
            <h2>Thank You for Reaching Out!</h2>
            <p>We'll get in touch with you within 24 hours.</p>
        </div>
    );
};

export default Thanks;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Ask = () => {
    const navigate = useNavigate();

    const handleCustomerLogin = () => {
        navigate("/login"); // Navigate to the Customer Login page
    };

    const handleBusinessmanLogin = () => {
        navigate("/loginb"); // Navigate to the Businessman Login page
    };

    return (
        <div style={styles.container}>
            <div style={styles.buttonsContainer}>
                <button style={styles.button} onClick={handleCustomerLogin}>
                    Customer Login
                </button>
                <button style={styles.button} onClick={handleBusinessmanLogin}>
                    Businessman Login
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
    },
    heading: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#333",
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
    },
    button: {
        backgroundColor: "#92590A",
        color: "white",
        padding: "10px 20px",
        margin: "0 10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    linkText: {
        fontSize: "14px",
        color: "#666",
        marginTop: "10px",
    },
    link: {
        color: "#2196F3",
        textDecoration: "none",
        fontWeight: "bold",
    },
};

export default Ask;

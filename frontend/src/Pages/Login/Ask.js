import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaBriefcase } from "react-icons/fa";
import BusinessImage from "../../assets/business.jpeg";
import LoginImage from "../../assets/user3-removebg-preview (3).png";

const Ask = () => {
    const navigate = useNavigate();

    const handleCustomerLogin = () => {
        navigate("/login");
    };

    const handleBusinessmanLogin = () => {
        navigate("/loginb");
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Choose Your Login</h2>
            <div style={styles.cardsContainer}>
                {/* Business Card */}
                <Link to="/loginb" style={styles.cardLink}>
                    <div style={styles.card}>
                        <img src={BusinessImage} alt="Business" style={styles.cardImage} />
                        <p style={styles.cardText}></p>
                        <button style={styles.button} onClick={handleBusinessmanLogin}>
                            Login as Business
                        </button>
                    </div>
                </Link>

                {/* Customer Login Card */}
                <Link to="/login" style={styles.cardLink}>
                    <div style={styles.card}>
                        <img src={LoginImage} alt="Login" style={styles.cardImage} />
                        <p style={styles.cardText}></p>
                        <button style={styles.button} onClick={handleCustomerLogin}>
                            Login as Customer
                        </button>
                    </div>
                </Link>
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
        fontSize: "50px",
        marginBottom: "20px",
        color: "#FFA500",
        textShadow: "2px 2px 4px rgba(147, 87, 8, 0.9)", // Orange color
        fontWeight: "bold",
    },
    cardsContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
    },
    cardLink: {
        textDecoration: "none",
    },
    card: {
        // border: "2px solid rgb(174, 127, 27)",  // Orange border
        borderRadius: "12px",
        overflow: "hidden",
        margin: " 30px 60px",
        textAlign: "center",
        width: "300px",
        height: "400px",
        backgroundColor: "#f9f7f1ae",
        boxShadow: "0 0 10px rgba(77, 74, 74, 0.5)",
        border: "4px solid #e4cd9d", 
        // Increased card size
    },
    cardImage: {
        width: "100%",
        height: "200px", // Set the desired height
        objectFit: "cover",
    },
    cardText: {
        fontSize: "18px",
        padding: "15px",
        color: "#333",
    },
    button: {
        backgroundColor: "#FFA520",
        color: "black",
        padding: "10px",
        margin: "15px 0",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    buttonActive: {
        backgroundColor: "#FFA500", // Change the color for the :active state
    },
};

export default Ask;

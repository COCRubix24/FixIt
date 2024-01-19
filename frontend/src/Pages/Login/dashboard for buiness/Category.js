// Categories.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Categories = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        // Fetch all complaints from the backend using getAllComplaints()
        // Replace this with your actual backend API call
        const fetchComplaints = async () => {
            try {
                const response = await fetch("/api/complaints");
                const data = await response.json();
                setComplaints(data);
            } catch (error) {
                console.error("Error fetching complaints:", error);
            }
        };
    }, []);

    return (
        <div className="categories-grid">
            {complaints.map((complaint, index) => (
                <Link key={index} to={`/dept/${index}`}>
                    <div className="square-card">
                        <div className="department-card">
                            {complaint.department}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Categories;

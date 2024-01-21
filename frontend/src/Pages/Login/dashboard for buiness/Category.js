// Categories.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

import { CompanyContext } from "../../../context/CompanyContext";
import { useContext } from "react";

const Categories = () => {
    const { isLoggedInC, Companyy, checkCompanyLoggedIn, handleLogout2 } =
        useContext(CompanyContext);

    useEffect(() => {
        // Fetch all complaints from the backend using getAllComplaints()
        // Replace this with your actual backend API call
        // const fetchComplaints = async () => {
        //     try {
        //         const response = await fetch("/api/complaints");
        //         const data = await response.json();
        //         setComplaints(data);
        //     } catch (error) {
        //         console.error("Error fetching complaints:", error);
        //     }
        // };
    }, [Companyy?._id]);

    if (!Companyy.departments) {
        return <div>Loading</div>;
    }

    return (
        <div className="categories-grid">
            {Companyy.departments.map((department, index) => (
                <div className="square-card">
                    <Link className="text-none" key={index} to={`/dept/${index}`}>
                        <div className="department-card">
                            {department}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Categories;
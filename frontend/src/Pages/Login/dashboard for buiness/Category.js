import React from "react";
import "./Category.css";

const Category = () => {
    return (
        <div className="square-card">
            <div className="department-card">Customer Service</div>
            <div className="department-card">Delivery</div>
            <div className="department-card">Product Quality</div>
            <div className="department-card">Returns</div>
            <div className="department-card">Technical Support</div>
            <div className="department-card">Billing</div>
        </div>
    );
};

export default Category;

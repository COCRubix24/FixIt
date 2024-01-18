// CaseDeets.js

import React from "react";
import "./CaseDeets.css"; // Import your CSS for styling

const CaseDeets = ({ caseDetails }) => {
    const { caseID, createdTime, status, openedByEmail, category, keywords } =
        caseDetails;

    return (
        <div className="case-details-container">
            <h2>Case Details</h2>
            <div className="details-section">
                <div className="detail">
                    <strong>Case ID:</strong> {caseID}
                </div>
                <div className="detail">
                    <strong>Created Time:</strong> {createdTime}
                </div>
                <div className="detail">
                    <strong>Status:</strong> {status}
                </div>
                <div className="detail">
                    <strong>Opened By:</strong> {openedByEmail}
                </div>
                <div className="detail">
                    <strong>Category:</strong> {category}
                </div>
                <div className="detail">
                    <strong>Subject:</strong> {keywords}
                </div>
            </div>
        </div>
    );
};

export default CaseDeets;

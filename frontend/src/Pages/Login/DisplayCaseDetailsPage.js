// DisplayCaseDetailsPage.js

import React, { useState } from "react";
import CaseDeets from "../../Components/CaseDeets";
import "./DisplayCaseDetailsPage.css"; // Import your CSS for styling
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const DisplayCaseDetailsPage = () => {
    // const location = useLocation();
    // const { state } = location;

    // Assuming you have case details from the backend or some state
    const currCase = JSON.parse(localStorage.getItem("currCase"));
    const caseDetails = {
        caseID: currCase.complain._id,
        createdTime: currCase.complain.createdAt,
        status: currCase.complain.status,
        openedByEmail: currCase.complain.email,
        category: currCase.complain.department,
        keywords: currCase.complain.keywords,
    };

    const [resolved, setResolved] = useState(false);
    const navigate = useNavigate();
    const handleResolveClick = () => {
        setResolved(true);
    };
    const handleDashClick = () => {
        navigate("/dashboarduser");
    };

    return (
        <div className="display-case-details-page">
            <CaseDeets caseDetails={caseDetails} />

            {!resolved ? (
                <div>
                    <p className="question-text">
                        Have your complaint been resolved?
                    </p>
                    <button
                        className="resolve-button"
                        onClick={handleResolveClick}
                    >
                        Resolved
                    </button>
                    <button
                        className="resolve-button"
                        onClick={handleDashClick}
                    >
                        Go to Dashboard
                    </button>
                </div>
            ) : (
                <p className="success-text">
                    Great to hear that your complaint has been resolved!
                </p>
            )}
        </div>
    );
};

export default DisplayCaseDetailsPage;

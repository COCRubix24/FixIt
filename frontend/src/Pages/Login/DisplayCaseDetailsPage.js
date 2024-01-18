// DisplayCaseDetailsPage.js

import React from "react";
import CaseDeets from "../../Components/CaseDeets";
import "./DisplayCaseDetailsPage.css"; // Import your CSS for styling
import { useLocation } from "react-router-dom";

const DisplayCaseDetailsPage = () => {
    const location = useLocation();
    const { state } = location;

    // Assuming you have case details from the backend or some state
    const caseDetails = {
        caseID: state._id || "65a8a3e4256267827a86d21f",
        createdTime: state.createdAt || "2024-01-18T04:07:00.616Z",
        status: state.status || "Submitted complain",
        openedByEmail: state.email || "altaf7@gmail.com",
        category: state.department || "Product Quality",
        keywords: state.keywords || "bad food, mcdonalds"
    };

    return (
        <div className="display-case-details-page">
            <CaseDeets caseDetails={caseDetails} />
        </div>
    );
};

export default DisplayCaseDetailsPage;

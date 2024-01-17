// DisplayCaseDetailsPage.js

import React from "react";
import CaseDeets from "../../Components/CaseDeets";
import "./DisplayCaseDetailsPage.css"; // Import your CSS for styling

const DisplayCaseDetailsPage = () => {
    // Assuming you have case details from the backend or some state
    const caseDetails = {
        caseID: "123456",
        createdTime: "2022-01-01 10:00 AM",
        status: "Work in Progress",
        openedByEmail: "user@example.com",
        category: "ML Categorized Category",
    };

    return (
        <div className="display-case-details-page">
            <CaseDeets caseDetails={caseDetails} />
        </div>
    );
};

export default DisplayCaseDetailsPage;

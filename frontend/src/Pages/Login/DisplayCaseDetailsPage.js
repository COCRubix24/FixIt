// DisplayCaseDetailsPage.js

import React from "react";
import CaseDeets from "../../Components/CaseDeets";
import "./DisplayCaseDetailsPage.css"; // Import your CSS for styling
// import { useLocation } from "react-router-dom";

const DisplayCaseDetailsPage = () => {
    // const location = useLocation();
    // const { state } = location;

    // Assuming you have case details from the backend or some state
    const currCase = JSON.parse(localStorage.getItem('currCase'));
    const caseDetails = {
        caseID: currCase.complain._id,
        createdTime: currCase.complain.createdAt,
        status: currCase.complain.status,
        openedByEmail: currCase.complain.email,
        category: currCase.complain.department,
        keywords: currCase.complain.keywords,
    };

    return (
        <div className="display-case-details-page">
            <CaseDeets caseDetails={caseDetails} />
        </div>
    );
};

export default DisplayCaseDetailsPage;

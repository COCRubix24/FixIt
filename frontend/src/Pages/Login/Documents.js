// Documents.js

import React, { useState } from "react";
import "./Documents.css"; // Import your CSS for styling
import { Link } from "react-router-dom";
const Documents = () => {
    const [anonymous, setAnonymous] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [additionalInformation, setAdditionalInformation] = useState("");
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [companies] = useState([
        "Bata",
        "BananaChips Inc.",
        // Add more company names here
    ]);
    const [recommendation, setRecommendation] = useState("");

    const handleAnonymousChange = () => {
        setAnonymous(!anonymous);
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedFiles([...files]);
    };

    const handleCompanyNameChange = (event) => {
        const input = event.target.value;
        setCompanyName(input);

        const filtered = companies.filter((company) =>
            company.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredCompanies(filtered);

        // Provide recommendations based on common complaints
        if (input.toLowerCase() === "bata") {
            setRecommendation(
                "Common complaints involve product quality concerns. Focus on improving quality control measures to enhance customer satisfaction."
            );
        } else if (input.toLowerCase() === "bananachips inc.") {
            setRecommendation("usually pakaging issues");
        } else {
            setRecommendation("");
        }
    };

    const handleCompanySelection = (selectedCompany) => {
        setCompanyName(selectedCompany);
        setFilteredCompanies([]);
    };

    const handleAdditionalInformationChange = (event) => {
        const info = event.target.value;
        setAdditionalInformation(info);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            anonymous,
            selectedFiles,
            companyName,
            additionalInformation,
        });
        // Add your logic to submit the form data to the server
    };

    return (
        <div className="documents-container">
            <h2>File a Complaint</h2>
            <form onSubmit={handleSubmit} className="complaint-form">
                <div className="form-group">
                    <label>
                        Company Name:
                        <input
                            type="text"
                            value={companyName}
                            onChange={handleCompanyNameChange}
                        />
                        {filteredCompanies.length > 0 && (
                            <ul className="autocomplete-list">
                                {filteredCompanies.map((company) => (
                                    <li
                                        key={company}
                                        onClick={() =>
                                            handleCompanySelection(company)
                                        }
                                    >
                                        {company}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </label>
                    {recommendation && (
                        <p className="recommendation">{recommendation}</p>
                    )}
                </div>
                <div className="form-group">
                    <label>
                        Attach Files:
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        File anonymously:
                        <input
                            type="checkbox"
                            checked={anonymous}
                            onChange={handleAnonymousChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>Additional Information (Optional):</label>
                    <textarea
                        rows="4"
                        value={additionalInformation}
                        onChange={handleAdditionalInformationChange}
                        style={{ width: "425px" }}
                    />
                </div>
                <Link to="/help">
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Documents;

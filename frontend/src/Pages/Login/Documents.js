import React, { useState } from "react";
import "./Documents.css"; // Import your CSS for styling
import axios from "axios";
import { Link } from "react-router-dom";
import JWT from "../../SECRET";
import Help from "./Help";
import { useNavigate } from "react-router-dom";
import HelpBg from "../../assets/help.png";
import girl from "../../assets/chat5.png";
import stars from "../../assets/chat2.png";
import thanks from "../../assets/chat1.png";
import Blob from "./blob.gif";
const Documents = () => {
    const [anonymous, setAnonymous] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState();
    const [companyName, setCompanyName] = useState("");
    const [additionalInformation, setAdditionalInformation] = useState("");
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [pinata, setPinata] = useState("");
    const [companies] = useState(["Bata", "BananaChips Inc.", "Amazon"]);
    const navigate = useNavigate();
    const [recommendation, setRecommendation] = useState("");

    const handleAnonymousChange = () => {
        setAnonymous(!anonymous);
    };

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files[0]);
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
        } else if (input.toLowerCase() === "amazon") {
            setRecommendation("defects");
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("file", selectedFiles);

        const metadata = JSON.stringify({
            name: "File name",
        });
        formData.append("pinataMetadata", metadata);

        const options = JSON.stringify({
            cidVersion: 0,
        });
        formData.append("pinataOptions", options);

        try {
            const res = await axios.post(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                formData,
                {
                    maxBodyLength: "Infinity",
                    headers: {
                        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                        Authorization: `Bearer ${JWT}`,
                    },
                }
            );
            setPinata(res.data);
            // console.log(res.data);
            console.log("pinata is", pinata);
            navigate("/help", {
                state: {
                    anonymous,
                    companyName,
                    pinata: res.data,
                    companies,
                    additionalInformation,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="help-whole">
            <img src={Blob} className="blobby" />
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
                    <img
                        src={thanks}
                        style={{
                            width: "13rem",
                            zIndex: "0.5",
                            position: "absolute",
                            // float: "right",
                            top: "7%",
                            left: "62%",
                        }}
                    />
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

                    <img
                        src={stars}
                        style={{
                            width: "15rem",
                            zIndex: "0.5",
                            position: "absolute",
                            // float: "right",
                            top: "30%",
                            left: "20%",
                        }}
                    />

                    <div className="form-group">
                        <label>Additional Information (Optional):</label>
                        <textarea
                            rows="4"
                            value={additionalInformation}
                            onChange={handleAdditionalInformationChange}
                            style={{ width: "425px" }}
                        />
                        {/* <Help /> */}
                    </div>

                    {/* <Link to="/help"> */}
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                    {/* </Link> */}
                </form>
                <div>
                    <img
                        src={girl}
                        style={{
                            width: "15rem",
                            zIndex: "0.5",
                            position: "relative",
                            float: "right",
                            top: "-180px",
                            right: "-130px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Documents;

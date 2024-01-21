import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CompanyContext } from "../../../context/CompanyContext";
import { useContext } from "react";
import './Dept.css';

const Dept = () => {
    const { isLoggedInC, Companyy, checkCompanyLoggedIn, handleLogout2 } =
        useContext(CompanyContext);

    const { index } = useParams();
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        fetchComplaintByIndex();
    }, [Companyy?._id]);

    const fetchComplaintByIndex = async () => {
        try {
            const formData = {
                companyId: Companyy._id,
                department: Companyy.departments[index],
            };

            const response = await axios.post(
                "http://localhost:8800/api/complain/department",
                formData
            );

            console.log(response.data);
            setComplaints(response.data);
        } catch (error) {
            console.error("Error fetching complaint by index:", error);
        }
    };

    return (
        <div>
            {Companyy ? (
                <div>
                    <h2>{Companyy.departments[index]} Department Details</h2>
                    {/* Map and display complaints */}
                    {complaints.length > 0 ? (
                        <div className="complaint-container">
                            {complaints.map((complaint, complaintIndex) => (
                                <div key={complaintIndex} className="complaint-box">
                                    <p>Company Name: {complaint.companyName}</p>
                                    {complaint.email && (
                                        <>
                                            <p>Email: {complaint.email}</p>
                                            <p>Name: {complaint.name}</p>
                                            <p>Phone: {complaint.phone}</p>{" "}
                                        </>
                                    )}
                                    <p>Created By: {complaint.createdBy}</p>
                                    <p>Pinata IPFS: {complaint.pinataIPFS}</p>
                                    <p>Preferred Language: {complaint.preferedLanguage}</p>
                                    <p>
                                        Preferred Contact Method: {complaint.preferedContactMethod}
                                    </p>
                                    <p>Status: {complaint.status}</p>
                                    <p>Description: {complaint.description}</p>
                                    <p>Department: {complaint.department}</p>
                                    <p>Keywords: {complaint.keywords}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No complaints found for this department.</p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
export default Dept;

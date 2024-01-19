import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CompanyContext } from "../../../context/CompanyContext";
import { useContext } from "react";

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
                        <ul>
                            {complaints.map((complaint, complaintIndex) => (
                                <li key={complaintIndex}>
                                    {/* Display complaint details here */}
                                    <p>Name: {complaint.name}</p>
                                    {/* Add more details as needed */}
                                </li>
                            ))}
                        </ul>
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

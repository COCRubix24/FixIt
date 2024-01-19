import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Complainthistory.css";

import { CompanyContext } from "../../../context/CompanyContext";
import { useContext } from "react";

const CaseListsB = () => {
    const { isLoggedInC, Companyy, checkCompanyLoggedIn, handleLogout2 } = useContext(CompanyContext);

    const [complaints, setComplaints] = useState([]);

    const fetchComplaints = async () => {
        try {
            console.log("1", Companyy);
            const formData = {
                id: Companyy._id,
            };
            console.log(formData)

        } catch (error) {
            console.error("Error fetching complaints:", error);
        }
    };

    useEffect(() => {
        fetchComplaints();
    }, [Companyy]);


    return (
        <div className="complaint-history-container">
            <h2>Complaint History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Complaint Id</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Time of Registration</th>
                        {/* <th>Attachments</th> */}
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {complaints.length > 0 ? complaints.map((item, index) => (
                        <tr key={index}>
                            <td>{item._id}</td>
                            <td>{item.name ? item.name : "Anomyous"}</td>
                            <td>{item.email}</td>
                            <td>{item.keywords}</td>
                            <td>{item.createdAt}</td>
                            {/* <td>
                                <input type="file" />
                            </td> */}
                            <td>{item.department}</td>
                            <td
                                className={`status resolved ${item.status.toLowerCase() === "resolved" ? "visible" : "hidden"
                                    }`}
                            >
                                Resolved
                            </td>
                            <td
                                className={`status pending ${item.status.toLowerCase() === "in progress" ? "visible" : "hidden"
                                    }`}
                            >
                                Pending
                            </td>
                        </tr>
                    )) : "No complaints for this business"}
                </tbody>
            </table>
        </div>
    );
};

export default CaseListsB;

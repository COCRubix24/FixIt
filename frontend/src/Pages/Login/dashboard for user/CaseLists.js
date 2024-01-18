import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Complainthistory.css";

import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";

const ComplaintHistory = () => {
    const { isLoggedIn, userr, checkUserLoggedIn, handleLogout } =
        useContext(UserContext);

    const [complaints, setComplaints] = useState([]);

    const fetchComplaints = async () => {
        try {
            // console.log("1",userr);
            const formData = {
                id: userr._id,
            };
            // console.log(formData)

            const response = await axios.post("http://localhost:8800/api/complain/getAllComplain", formData);
            console.log(response.data);
            setComplaints(response.data.complains);
        } catch (error) {
            console.error("Error fetching complaints:", error);
        }
    };

    useEffect(() => {
        fetchComplaints();
    }, [userr]);


    return (
        <div className="complaint-history-container">
            <h2>Complaint History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Complaint Id</th>
                        <th>Company</th>
                        <th>Description</th>
                        <th>Time of Registration</th>
                        {/* <th>Attachments</th> */}
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {complaints ? complaints.map((item, index) => (
                        <tr key={index}>
                            <td>{item._id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.description}</td>
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
                    )) : "No complaints for this user"}
                </tbody>
            </table>
        </div>
    );
};

export default ComplaintHistory;

// Dept.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dept = ({ complaints }) => {
    const { index } = useParams();
    const [complaint, setComplaint] = useState(null);

    useEffect(() => {
        const fetchComplaintByIndex = async () => {
            try {
                if (complaints && complaints.length > 0) {
                    setComplaint(complaints[Number(index)]);
                }
            } catch (error) {
                console.error("Error fetching complaint by index:", error);
            }
        };

        fetchComplaintByIndex();
    }, [index, complaints]);

    return (
        <div>
            {complaint ? (
                <div>
                    <h2>{complaint.department} Department Details</h2>
                    {/* Display other complaint details here */}
                    <p>User: {complaint.user}</p>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dept;

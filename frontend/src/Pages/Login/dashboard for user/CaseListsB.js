import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./Complainthistory.css";

// import { UserContext } from "../../../context/UserContext";
// import { useContext } from "react";

const CaseListsB = () => {
    //     const { isLoggedIn, userr, checkUserLoggedIn, handleLogout } =
    //         useContext(UserContext);

    //     const [complaints, setCoCasemplaints] = useState([]);

    //     const fetchComplaints = async () => {
    //         try {
    //             // console.log("1",userr);
    //             const formData = {
    //                 id: userr._id,
    //             };
    //             // console.log(formData)

    //             const response = await axios.post(
    //                 "http://localhost:8800/api/complain/getAllComplain",
    //                 formData
    //             );
    //             console.log(response.data);
    //             setComplaints(response.data.complains);
    //         } catch (error) {
    //             console.error("Error fetching complaints:", error);
    //         }
    //     };

    //     useEffect(() => {
    //         fetchComplaints();
    //     }, [userr]);

    return (
        <div className="complaint-history-container">
            <h2>Complaint History</h2>
        </div>
    );
};

export default CaseListsB;

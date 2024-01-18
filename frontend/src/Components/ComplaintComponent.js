import React, { useState } from "react";

const ComplaintComponent = ({ onComplaintSubmit }) => {
    const [complaintText, setComplaintText] = useState("");

    const handleComplaintSubmit = () => {
        // Placeholder logic for handling the submitted complaint
        // You can add more specific logic here, such as sending the complaint to a server

        // Inform the parent component that the complaint is submitted
        onComplaintSubmit();
    };

    return (
        <div>
            <div>
                <textarea
                    value={complaintText}
                    onChange={(e) => setComplaintText(e.target.value)}
                    placeholder="Describe your complaint..."
                />
            </div>
            <div>
                <button onClick={handleComplaintSubmit}>
                    Submit Complaint
                </button>
            </div>
        </div>
    );
};

export default ComplaintComponent;

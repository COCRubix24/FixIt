import React, { useState } from "react";

const ResolutionComponent = ({ onResolutionConfirm }) => {
    const [resolutionText, setResolutionText] = useState("");

    const handleResolutionConfirmation = () => {
        // Placeholder logic for confirming resolution
        // You can add more specific logic here, such as updating the resolution status

        // Inform the parent component that the resolution is confirmed
        onResolutionConfirm();
    };

    return (
        <div>
            <div>
                <p>Describe the resolution:</p>
                <textarea
                    value={resolutionText}
                    onChange={(e) => setResolutionText(e.target.value)}
                    placeholder="Describe the resolution..."
                />
            </div>
            <div>
                <button onClick={handleResolutionConfirmation}>
                    Confirm Resolution
                </button>
            </div>
        </div>
    );
};

export default ResolutionComponent;

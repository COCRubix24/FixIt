import React, { useState } from "react";

const MediaComponent = ({ onMediaSubmit }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        // Placeholder logic for handling file selection
        // You can add more specific logic here, such as validating file types and sizes

        setSelectedFile(e.target.files[0]);
    };

    const handleMediaSubmit = () => {
        // Placeholder logic for handling the submitted media/document
        // You can add more specific logic here, such as uploading the file to a server

        // Inform the parent component that the media/document is submitted
        onMediaSubmit();
    };

    return (
        <div>
            <div>
                <input type="file" onChange={handleFileChange} />
            </div>
            <div>
                <button onClick={handleMediaSubmit}>
                    Submit Media/Document
                </button>
            </div>
        </div>
    );
};

export default MediaComponent;

// ComplaintHistory.jsx

import React from 'react';
import './Complainthistory.css'; // Make sure to create this CSS file

const Complainthistory = () => {
  // Dummy data
  const data = [
    { complaintId: '1', mobileNumber: '1234567890', description: 'Lorem ipsum', timeOfRegistration: '2022-01-01 12:00:00', status: 'Pending' },
    { complaintId: '2', mobileNumber: '9876543210', description: 'Lorem ipsum', timeOfRegistration: '2022-01-02 14:30:00', status: 'Resolved' },
    { complaintId: '2', mobileNumber: '9876543210', description: 'Lorem ipsum', timeOfRegistration: '2022-01-02 14:30:00', status: 'Resolved' },
    { complaintId: '2', mobileNumber: '9876543210', description: 'Lorem ipsum', timeOfRegistration: '2022-01-02 14:30:00', status: 'Resolved' },
    { complaintId: '2', mobileNumber: '9876543210', description: 'Lorem ipsum', timeOfRegistration: '2022-01-02 14:30:00', status: 'Resolved' },
    { complaintId: '2', mobileNumber: '9876543210', description: 'Lorem ipsum', timeOfRegistration: '2022-01-02 14:30:00', status: 'Resolved' },
    
  ];

  return (
    <div className="complaint-history-container">
      {/* <h2>Complaint History</h2> */}
      <table>
        <thead>
          <tr>
            <th>Complaint Id</th>
            <th>Mobile Number</th>
            <th>Description</th>
            <th>Time of Registration</th>
            <th>Attachments</th>
            <th >Status</th>
         
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.complaintId}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.description}</td>
              <td>{item.timeOfRegistration}</td>
              <td>
               
                <input type="file" />
              </td>
         
              <td className={`status resolved ${item.status.toLowerCase() === 'resolved' ? 'visible' : 'hidden'}`}>
                Resolved
              </td>
              <td className={`status pending ${item.status.toLowerCase() === 'pending' ? 'visible' : 'hidden'}`}>
                Pending
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Complainthistory;

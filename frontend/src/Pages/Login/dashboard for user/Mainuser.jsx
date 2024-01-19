import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';

import { CompanyContext } from "../../../context/CompanyContext";
import { useContext } from "react";

function Mainuser() {
  const { isLoggedInC, Companyy, checkCompanyLoggedIn, handleLogout2 } =
    useContext(CompanyContext);

  const [dashboardData, setDashboardData] = useState({
    // totalComplaints: 0,
    // resolvedComplaints: 0,
    // pendingComplaints: 0,
    // averageResolutionTime: 0,
    // categoryData: [],
    // trendData: [],
  });

  useEffect(() => {
    fetchData();
  }, [Companyy]);

  const fetchData = async () => {
    const formData = {
      companyId: Companyy._id,
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/api/complain/dashboardB",
        formData
      );
      console.log(response.data);
      setDashboardData(response.data);
    } catch (error) {
      console.error(error.response);
    }
  }

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total no of complaints</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1 className='hello'>{dashboardData.totalComplaints}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Resolved complaints</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1 className='hello'>{dashboardData.resolvedComplaints}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Pending complaints</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1 className='hello'>{dashboardData.pendingComplaints}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Average Resolution Time</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1 className='hello'>{dashboardData.averageResolutionTime} hours</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={dashboardData.categoryData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="resolved" fill="#8884d8" />
            <Bar dataKey="pending" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={dashboardData.trendData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="resolved" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="pending" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Mainuser;

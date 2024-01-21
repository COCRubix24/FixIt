import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Mainuser() {

const data = [
  {
    category: 'Product Defects',
    resolved: 25,
    pending: 10,
    total: 35,
  },
  {
    id: 2,
    category: 'Service Dec.',
    resolved: 15,
    pending: 5,
    total:20
  },
  {
    id: 3,
    category: 'Delivery Issues',
    resolved: 20,
    pending: 8,
    total: 28
  },
  {
    id: 4,
    category: 'Customer Service',
    resolved: 18,
    pending: 12,
    total: 30
  },
  // Add more categories as needed
];
const trendData = [
  {
    month: 'Jan',
    category: 'Product Defects',
    resolved: 25,
    pending: 10,
    total: 35,
  },
  {
    month: 'Feb',
    category: 'Product Defects',
    resolved: 28,
    pending: 8,
    total: 36,
  },
  {
    month: 'Mar',
    category: 'Product Defects',
    resolved: 30,
    pending: 5,
    total: 35,
  },
  {
    month: 'Jan',
    category: 'Service Dec.',
    resolved: 15,
    pending: 5,
    total: 20,
  },
  {
    month: 'Feb',
    category: 'Service Dec.',
    resolved: 18,
    pending: 7,
    total: 25,
  },
  {
    month: 'Mar',
    category: 'Service Dec.',
    resolved: 20,
    pending: 4,
    total: 24,
  },
  {
    month: 'Jan',
    category: 'Delivery Issues',
    resolved: 20,
    pending: 8,
    total: 28,
  },
  {
    month: 'Feb',
    category: 'Delivery Issues',
    resolved: 22,
    pending: 6,
    total: 28,
  },
  {
    month: 'Mar',
    category: 'Delivery Issues',
    resolved: 25,
    pending: 3,
    total: 28,
  },
  {
    month: 'Jan',
    category: 'Customer Service',
    resolved: 18,
    pending: 12,
    total: 30,
  },
  {
    month: 'Feb',
    category: 'Customer Service',
    resolved: 20,
    pending: 8,
    total: 28,
  },
  {
    month: 'Mar',
    category: 'Customer Service',
    resolved: 22,
    pending: 6,
    total: 28,
  },
  // Add more months and categories as needed
];

     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total no of complaints</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1 className='hello'>121</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Resolved complaints</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1 className='hello'>90</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Pending complaints</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1 className='hello'>31</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Average Resolution Time</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1 className='hello'>72 hours</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
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
                data={trendData}
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
  )
}

export default Mainuser;
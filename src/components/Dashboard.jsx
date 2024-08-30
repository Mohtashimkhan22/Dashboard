// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
        <h1 className="text-lg font-semibold">Dashboard V2</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Add Widget</button>
          <select className="border rounded-md px-3 py-2">
            <option>Last 2 days</option>
          </select>
        </div>
      </header>

      <main className="grid grid-cols-3 gap-6 mt-6">
        {/* Add each section here as a separate component */}
        <div className="col-span-1 bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-semibold mb-4">Cloud Accounts</h2>
          {/* Include your donut chart here */}
        </div>
        
        <div className="col-span-1 bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-semibold mb-4">Cloud Account Risk Assessment</h2>
          {/* Include your pie chart here */}
        </div>
        
        <div className="col-span-1 bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-semibold mb-4">Top 5 Namespace Specific Alerts</h2>
          <p className="text-gray-500">No Graph data available!</p>
        </div>

        <div className="col-span-1 bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-semibold mb-4">Workload Alerts</h2>
          <p className="text-gray-500">No Graph data available!</p>
        </div>

        <div className="col-span-1 bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-semibold mb-4">Image Risk Assessment</h2>
          {/* Include your horizontal bar chart here */}
        </div>

        <div className="col-span-1 bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-semibold mb-4">Image Security Issues</h2>
          {/* Include your horizontal bar chart here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
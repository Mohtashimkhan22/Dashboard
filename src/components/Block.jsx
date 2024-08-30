import React from "react";
import DonutChart from "./DonutChart";
import DonutChart2 from "./DonutChart2";
import { Add } from "@mui/icons-material";
import barChart from "../assets/barChart.jpg";

const Block = () => {
  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-50 p-4">
          <main className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6">
            {/* Add each section here as a separate component */}
            <div className="col-span-1 bg-white shadow rounded-lg p-4 h-70">
              <h2 className="text-sm font-semibold mb-4">Cloud Accounts</h2>
              <DonutChart />
            </div>

            <div className="col-span-1 bg-white shadow rounded-lg p-4 h-70">
              <h2 className="text-sm font-semibold mb-4">
                Cloud Account Risk Assessment
              </h2>
              <DonutChart2 />
            </div>

            <div className="col-span-1 bg-white shadow rounded-lg p-4 h-70 flex items-center justify-center cursor-pointer">
              <div className="border-2 p-2 rounded-md m-2 flex items-center justify-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                <Add className="text-blue-600" />
                <h5 className="pl-2 font-semibold text-blue-600">Add Widget</h5>
              </div>
            </div>

            <div className="col-span-1 bg-white shadow rounded-lg p-4 h-70">
              <h2 className="text-sm font-semibold mb-4">
                Top 5 Namespace Specific Alerts
              </h2>
              <div className="flex-row justify-center items-center">
                <img src={barChart} alt="" className="h-8 w-8 " />
                <p className="text-gray-500">No Graph data available!</p>
              </div>
            </div>
            <div className="col-span-1 bg-white shadow rounded-lg p-4 h-70">
              <h2 className="text-sm font-semibold mb-4">Workload Alerts</h2>
              <div className="flex-row justify-center items-center">
                <img src={barChart} alt="" className="h-8 w-8" />
                <p className="text-gray-500">No Graph data available!</p>
              </div>
            </div>

            <div className="col-span-1 bg-white shadow rounded-lg p-4 h-70 flex items-center justify-center cursor-pointer">
              <div className="border-2 p-2 rounded-md m-2 flex items-center justify-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                <Add className="text-blue-600" />
                <h5 className="pl-2 font-semibold text-blue-600">Add Widget</h5>
              </div>
            </div>

            <div className="col-span-1 bg-white shadow rounded-lg p-4 h-70">
              <h2 className="text-sm font-semibold mb-4">
                Image Risk Assessment
              </h2>
              {/* Include your horizontal bar chart here */}
            </div>

            <div className="col-span-1 bg-white shadow rounded-lg p-4 h-70">
              <h2 className="text-sm font-semibold mb-4">
                Image Security Issues
              </h2>
              {/* Include your horizontal bar chart here */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Block;

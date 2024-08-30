import React from "react";
import Dropdown from "./Dropdown";
import ThreeDotMenu from "./ThreeDotMenu";
import { AccessTimeFilled, Add, Autorenew } from "@mui/icons-material";
import { Divider, Menu } from "@mui/material";

const Header = ({ refresh }) => {
  return (
    <header className="bg-gray-100 text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold">CNAPP Dashboard</span>
        </a>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
          <div className="border-2 p-2 rounded-md m-2 flex items-center justify-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
            <h5 className="pl-2 font-semibold text-blue-600">Add Widget</h5>
            <Add className="text-blue-600" />
          </div>
          <div
            className="border-2 p-2 rounded-md m-2 flex items-center justify-center bg-green-50 hover:bg-green-100 transition-colors duration-200"
            onClick={refresh}
          >
            <Autorenew className="text-green-600" />
          </div>
          <div className="border-2 rounded-md m-2 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <ThreeDotMenu />
          </div>
        </div>
        <div className="border-2 rounded-md border-blue-600 m-2 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
          <AccessTimeFilled className="text-blue-600 m-1" />
          <Divider
            orientation="vertical"
            flexItem
            className="mx-2"
            style={{height:"50px", width: '4px', backgroundColor: "blue", margin: "2px" }}
          />
          <Dropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;

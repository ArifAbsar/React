import React from 'react';
import CheckboxList from './checkbox';
const MainContent = ({ handleClick }) => {
  return (
    <div className="flex-1 p-4" style={{ marginLeft: "192px", marginRight: "192px" }}>
      <div className="w-full p-4 bg-white shadow-lg rounded-md dark:bg-gray-800 text-center">
        <h1 className="italic font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-gray-100">
          TRP SYSTEM
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4" style={{ height: "calc(85vh - 120px)" }}>
        <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex flex-col">
          <div className="flex-1">Left Section</div>
        <CheckboxList/>
       </div>
        <div className="flex flex-col space-y-4">
          <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex items-center justify-center">
            <h2 className="text-lg font-normal">Middle Top Section</h2>
          </div>
          <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex-1">
            Middle Bottom Section
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex flex-col">
          <div className="flex-1">Right Section</div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          id="okButton"
          onClick={handleClick}
          className="px-6 py-3 bg-black text-white rounded-md text-lg transition duration-500 ease-in-out transform hover:scale-105"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default MainContent;

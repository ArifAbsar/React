import React from 'react';
import CheckboxList from './checkbox_Time';
import CheckboxOption from './checkbox_analysis_option';
import Header from './channelheader';
import ProgrammeTRP from './ProgrammeTRP';
import StrategicForecasting from './StrategicForecasting';
import TargetGroup from './TargetGroup'; // Import the TargetGroup component
import HeaderGRP from './targetgrpheader';

const MainContent = ({ handleClick, selectedMenu, selectedSubmenu }) => {
  return (
    <div className="flex flex-col w-screen h-screen p-2" style={{ marginLeft: "192px", marginRight: "192px" }}>
      <div className="w-full p-4 bg-white shadow-lg rounded-md dark:bg-gray-800 text-center">
        <h1 className="italic font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-gray-100">
          TRP SYSTEM
        </h1>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {selectedMenu === "Target Group" ? (
          <>
            <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex flex-col overflow-hidden">
              <HeaderGRP />
              <div className="flex flex-1 p-0">
                <div className="w-full max-w-lg">
                  <form className="mt-5 sm:flex sm:items-center">
                    <input type='text' name='Sr_channel' className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder='Search Channels' />
                    <button type="submit" className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Search</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex flex-col">
              <TargetGroup />
            </div>
            <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex flex-col">
              <div className="flex-1">Right Section</div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex flex-col overflow-hidden">
              {selectedSubmenu === "Time" && <CheckboxList />}
              {selectedSubmenu === "Programme TRP" && <ProgrammeTRP />}
              {selectedSubmenu === "Strategic Forecasting" && <StrategicForecasting />}
            </div>
            <div className="flex flex-col space-y-4">
              <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex items-center justify-center">
                <h2 className="text-lg font-normal">Middle Top Section</h2>
              </div>
              <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex-1 overflow-hidden">
                <CheckboxOption />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex flex-col overflow-hidden">
              <Header />
              <div className="flex flex-1 p-0">
                <div className="w-full max-w-lg">
                  <form className="mt-5 sm:flex sm:items-center">
                    <input type='text' name='Sr_channel' className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder='Search Channels' />
                    <button type="submit" className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center mt-2">
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
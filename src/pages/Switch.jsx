import React from 'react';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div className="flex items-center justify-center w-full py-2">
     <h2 className='fixed left-14'>Dark Mode</h2> 
      <div
        className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isOn ? 'bg-green-400' : ''
        }`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
            isOn ? 'translate-x-4' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default Switch;

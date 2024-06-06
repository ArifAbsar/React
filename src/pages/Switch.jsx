import React from 'react';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div className="flex items-center justify-center w-full py-4">
      <div
        className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isOn ? 'bg-green-400' : ''
        }`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform ${
            isOn ? 'translate-x-6' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default Switch;

import React from 'react';

const RightSidebar = ({ children }) => {
  return (
    <div className="bg-[#0e0e0e] text-gray-100 px-4 fixed top-0 right-0 z-10" style={{ width: "192px", height: "100vh" }}>
      {children}
    </div>
  );
};

export default RightSidebar;

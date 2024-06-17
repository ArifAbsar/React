import React from "react";
import Menu from './Menu';

const Sidebar = ({ menus, dropdown, handleMenuClick, darkMode, toggleDarkMode }) => {
  return (
    <div className={`bg-[#0e0e0e] text-gray-100 px-4 fixed top-0 left-0 z-10`} style={{ width: "192px", height: "100vh" }}>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus.map((menu, i) => (
          <Menu
            key={i}
            menu={menu}
            index={i}
            dropdown={dropdown}
            handleMenuClick={handleMenuClick}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

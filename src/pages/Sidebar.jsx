import React, { useState } from "react";
import Menu from './Menu';

const Sidebar = ({ menus, dropdown, handleMenuClick, darkMode, toggleDarkMode, handleSubmenuClick, selectedMenu, selectedSubmenu, language, changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu */}
      <div className="lg:hidden flex items-center p-4">
        <button
          onClick={handleToggleSidebar}
          className="text-gray-100 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-10 bg-[#0e0e0e] text-gray-100 px-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        style={{ width: "192px", height: "100vh" }}
      >
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
              handleSubmenuClick={handleSubmenuClick}
              selectedMenu={selectedMenu} // Pass the selected menu
              selectedSubmenu={selectedSubmenu} // Pass the selected submenu
            />
          ))}
        </div>
        {selectedSubmenu === "Select Language" && (
          <div className="p-2 mt-4">
            <div id="google_translate_element"></div>
          </div>
        )}
      </div>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-5 lg:hidden"
          onClick={handleToggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

import React from 'react';
import Switch from './Switch';

const Menu = ({ menu, index, dropdown, handleMenuClick, darkMode, toggleDarkMode, handleSubmenuClick, selectedSubmenu }) => {
  return (
    <div className="relative group">
      <div
        className={`flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md cursor-pointer`}
        onClick={() => handleMenuClick(index)}
      >
        <div>{React.createElement(menu.icon, { size: "20px" })}</div>
        <h2 className={`whitespace-pre duration-700 ${!open && "opacity-0 translate-x-28 overflow-hidden"}${open && "hidden"}`}>
          {menu.name}
        </h2>
        <h2
          className={`${
            open && "hidden"
          } fixed left-10 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
          style={{ whiteSpace: 'nowrap' }}
        >
          {menu.name}
        </h2>
      </div>
      {menu.subMenus && (
        <div className={`${dropdown === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-700 ease-in-out pl-6 mt-2`}>
          {menu.subMenus.map((subMenu, j) => (
            <div
              key={j}
              className={`block text-sm font-medium p-2 hover:bg-gray-700 rounded-md cursor-pointer ${
                selectedSubmenu === subMenu.name ? "bg-gray-700" : ""
              }`}
              onClick={subMenu.action === "toggleDarkMode" ? toggleDarkMode : () => handleSubmenuClick(subMenu.name)}
            >
              {subMenu.name === "Toggle Dark Mode" ? (
                <Switch isOn={darkMode} handleToggle={toggleDarkMode} />
              ) : (
                subMenu.name
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

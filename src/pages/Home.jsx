import React, { useState, useEffect } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiGroupFill } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Switch from './Switch'; // Import the custom switch component

const Home = () => {
  const menus = [
    {
      name: "Analyze",
      link: "/",
      icon: TbBrandGoogleAnalytics,
      subMenus: [
        { name: "Time", link: "/time" },
        { name: "Programme TRP", link: "/programme_trp" },
        { name: "Strategic Forecasting", link: "/forecasting" },
      ],
    },
    {
      name: "Target Group",
      link: "/",
      icon: RiGroupFill,
      subMenus: [
        { name: "Pre-Defined", link: "/pre_defined" },
        { name: "User-Defined", link: "/user_defined" },
      ],
    },
    { name: "Target Time", link: "/", icon: MdAccessTime },
    {
      name: "Settings",
      link: "/",
      icon: IoSettingsOutline,
      subMenus: [{ name: "Toggle Dark Mode", action: "toggleDarkMode" }],
    },
  ];

  const [open, setOpen] = useState(true);
  const [dropdown, setDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleMenuClick = (index) => {
    setOpen(true);
    if (dropdown === index) {
      setDropdown(null);
    } else {
      setDropdown(index);
    }
  };

  const handleSidebarToggle = () => {
    setOpen(!open);
    if (open) {
      setDropdown(null);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex ${darkMode ? "dark" : ""}`}>
      <div
        className={`bg-[#0e0e0e] min-h-screen duration-500 text-gray-100 px-4 fixed top-0 left-0 z-10 overflow-y-auto ${
          open ? "w-72" : "w-16"
        }`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={handleSidebarToggle}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <div key={i} className="relative group">
              <div
                className={`flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md cursor-pointer`}
                onClick={() => handleMenuClick(i)}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-700 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }${open && "hidden"}`}
                >
                  {menu?.name}
                </h2>
                <h2
                className={`${
                  open && "hidden"
                }  fixed left-10 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
                style={{ whiteSpace: 'nowrap' }}
              >
                {menu?.name}
              </h2>
              </div>
              
              {menu.subMenus && (
                <div
                  className={`${
                    dropdown === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden transition-all duration-700 ease-in-out pl-6 mt-2`}
                >
                  {menu.subMenus.map((subMenu, j) => (
                    <div
                      key={j}
                      className="block text-sm font-medium p-2 hover:bg-gray-700 rounded-md cursor-pointer"
                      onClick={
                        subMenu.action === "toggleDarkMode"
                          ? toggleDarkMode
                          : null
                      }
                    >
                      {subMenu.name === "Toggle Dark Mode" ? (
                        <Switch
                          isOn={darkMode}
                          handleToggle={toggleDarkMode}
                        />
                      ) : (
                        subMenu.name
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex-1 duration-500 ease-in-out ${
          open ? "ml-72" : "ml-16"
        }`}
      >
        <div className="p-4">
          <div className="flex-auto mt-0 w-full p-4 bg-white shadow-lg rounded-md dark:bg-gray-800">
            <h1 className="italic font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-gray-100">
              TRP SYSTEM
            </h1>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100">
              Box 1
            </div>
            <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100">
              Box 2
            </div>
            <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100">
              Box 3
            </div>
            <div className="bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100">
              Box 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


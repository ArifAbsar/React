import React, { useState, useEffect } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
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

  const [dropdown, setDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleMenuClick = (index) => {
    if (dropdown === index) {
      setDropdown(null);
    } else {
      setDropdown(index);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleClick = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  return (
    <div className={`flex ${darkMode ? "dark" : ""} min-h-screen`}>
      <div
        className={`bg-[#0e0e0e] text-gray-100 px-4 fixed top-0 left-0 z-10 w-1/6 overflow-y-auto min-h-screen`}
      >
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
                  } fixed left-10 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
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

      <div className="flex-1 mx-auto p-4" style={{ maxWidth: "66.67%" }}>
        <div className="w-full p-4 bg-white shadow-lg rounded-md dark:bg-gray-800 text-center">
          <h1 className="italic font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-gray-100">
            TRP SYSTEM
          </h1>
        </div>
        <div className="flex w-full mt-4 space-x-4">
          <div className="flex-1 bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 h-96">
            Left Section
          </div>
          <div className="flex-1 flex flex-col space-y-4">
            <div className="h-18 bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 flex items-center justify-center">
              <h2 className="text-lg font-normal">Middle Top Section</h2>
            </div>
            <div className="flex-1 bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100">
              Middle Bottom Section
            </div>
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-md p-6 dark:bg-gray-800 dark:text-gray-100 h-96">
            Right Section
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
        {notification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-500">
            Button pressed!
          </div>
        )}
      </div>

      <div
        className={`bg-[#0e0e0e] min-h-screen text-gray-100 px-4 fixed top-0 right-0 z-10 w-1/6 overflow-y-auto`}
      >
        {/* Right sidebar content here */}
      </div>
    </div>
  );
};

export default Home;

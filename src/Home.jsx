import React, { useState, useEffect } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiGroupFill } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Sidebar from "./pages/Sidebar";
import MainContent from "./pages/MainContent";
import Notification from "./pages/notification";

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
      link: "/target_group",
      icon: RiGroupFill,
    },
    { name: "Target Time", link: "/", icon: MdAccessTime },
    {
      name: "Settings",
      link: "/",
      icon: IoSettingsOutline,
      subMenus: [{ name: "Toggle Dark Mode", action: "toggleDarkMode" }],
    },
  ];

  const [dropdown, setDropdown] = useState(0); // Set initial dropdown to the index of the menu containing "Time"
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Analyze");
  const [selectedSubmenu, setSelectedSubmenu] = useState("Time"); // Default to "Time"

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleMenuClick = (menuName, index) => {
    if (selectedMenu === menuName && menuName !== "Analyze") {
      // Only toggle dropdown for "Analyze"
      setSelectedMenu(menuName);
      setDropdown(null);
    } else {
      setSelectedMenu(menuName);
      setDropdown(index);
    }
  };

  const handleSubmenuClick = (submenu) => {
    setSelectedSubmenu(submenu);
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
      <Sidebar
        menus={menus}
        dropdown={dropdown}
        handleMenuClick={handleMenuClick}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleSubmenuClick={handleSubmenuClick}
        selectedMenu={selectedMenu} 
        selectedSubmenu={selectedSubmenu} 
      />
      <MainContent
        handleClick={handleClick}
        selectedMenu={selectedMenu} 
        selectedSubmenu={selectedSubmenu} 
      />
      <div
        className={`bg-[#0e0e0e] text-gray-100 px-4 fixed top-0 right-0 z-10`}
        style={{ width: "192px", height: "100vh" }}
      >
        {/* Right sidebar content here */}
      </div>
      <Notification notification={notification} />
    </div>
  );
};

export default Home;
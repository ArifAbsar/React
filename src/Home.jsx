import React, { useState, useEffect } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Sidebar from "./pages/Sidebar";
import MainContent from "./pages/MainContent";
import Notification from "./pages/notification";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiGroupFill } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


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
      <Sidebar
        menus={menus}
        dropdown={dropdown}
        handleMenuClick={handleMenuClick}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <MainContent handleClick={handleClick} />
      <div className={`bg-[#0e0e0e] text-gray-100 px-4 fixed top-0 right-0 z-10`} style={{ width: "192px", height: "100vh" }}>
        {/* Right sidebar content here */}
      </div>
      <Notification notification={notification} />
    </div>
  );
};

export default Home;
import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiGroupFill } from "react-icons/ri"
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import {Rnd} from 'react-rnd';

const Home = () => {

  const menus = [
    { name: "Analyze", link: "/", icon: TbBrandGoogleAnalytics, 
      subMenus:[
        {name:'Time',link:'/time'},
        {name:'Programme TRP',link:'/programme_trp'},
        {name:'Strategic Forecasting',link:'/forecasting'}

      ],
    },
    { name: "Target Group", link: "/", icon: RiGroupFill,
      subMenus:[
        {name:'Pre-Defined',link:'/pre_defined'},
        {name:'User-Defined',link:'/user_defined'}
      ],
     },
    { name: "Target Time", link: "/", icon: MdAccessTime },
  ];
  const [open, setOpen] = useState(true);
  const [dropdown,setDropdown]=useState(null);
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
  const layout = [
    { i: "1", x: 0, y: 0, w: 6, h: 8 },
    { i: "2", x: 6, y: 0, w: 6, h: 8 },
    { i: "3", x: 0, y: 2, w: 6, h: 2 },
    { i: "4", x: 6, y: 2, w: 6, h: 2 },
  ];
  return (
    <section className="flex gap-6">
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
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
          <div key={i} className="relative">
            <div
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md cursor-pointer`}
              onClick={() => handleMenuClick(i)}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </div>
            {menu.subMenus && (
              <div
                className={`${
                  dropdown === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-500 ease-in-out pl-6 mt-2`}
              >
                {menu.subMenus.map((subMenu, j) => (
                  <Link
                    to={subMenu.link}
                    key={j}
                    className="block text-sm font-medium p-2 hover:bg-gray-700 rounded-md"
                  >
                    {subMenu.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
   
    <div className="m-3 text-xl text-gray-900 font-semibold w-full">
    <div className="mt-8 absolute top-0 italic font-extrabold text-3xl">TRP SYSTEM</div>
        <div className="mt-24 grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-lg rounded-md p-4">
            Box 1
          </div>
          <div className="bg-white shadow-lg rounded-md p-6 w-full h-64">
            Box 2
          </div>
          <div className="bg-white shadow-lg rounded-md p-6 w-full h-64">
            Box 3
          </div>
          <div className="bg-white shadow-lg rounded-md p-6 w-full h-64">
            Box 4
          </div>
        </div>
      </div>
  </section>
);
};

export default Home;

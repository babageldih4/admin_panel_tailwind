import { FC, useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import HamburgerButton from "../hamburgerMenu/HamburgerButton";

import Admin from "../ProjectManager";
import { FaCode } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaTableCells } from "react-icons/fa6";
import { MenuItem } from "../../../types/types";
import Profile from "../Profile";
import { useTranslation } from "react-i18next";
const Sidebar: FC = () => {
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  const location = useLocation();
  const { t } = useTranslation();
  const sidebar = useRef<HTMLDivElement>(null);
  const handleSettingsOpen = () => {
    setSettingsOpen(!settingsOpen);
  };
  useEffect(() => {
    const handleClicker = (event: MouseEvent) => {
      if (!sidebar.current) return;
      if (!mobile || sidebar.current.contains(event.target as Node)) return;
      setMobile(false);
    };
    document.addEventListener("click", handleClicker);
    return () => document.removeEventListener("click", handleClicker);
  });
  const Menus: MenuItem[] = [
    {
      title: "sidebar.dashboard",
      path: "/dashboard",
      startIcon: <RxDashboard />,
    },
    {
      title: "sidebar.home",
      path: "/",
      startIcon: <IoHomeOutline />,
    },
    {
      title: "sidebar.profile",
      path: "/profile",
      startIcon: <CgProfile />,
    },
    {
      title: "sidebar.codes",
      path: "/codes",
      startIcon: <FaCode />,
    },
    {
      title: "sidebar.tables",
      path: "/tables",
      startIcon: <FaTableCells />,
    },
    {
      title: "sidebar.settings",
      path: "/settings",
      startIcon: <IoSettingsOutline />,
      endIcon: settingsOpen ? <FaAngleUp /> : <FaAngleDown />,
      dropdown: [
        {
          title: "General",
          path: "/settings/general",
          icon: <IoSettingsOutline />,
        },
        {
          title: "Security",
          path: "/settings/security",
          icon: <MdOutlineSecurity />,
        },
        {
          title: "Notifications",
          path: "/settings/notifications",
          icon: <IoIosNotificationsOutline />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="relative  dark:border-gray-800  bg-slate-200 dark:bg-gray-800 dark:shadow-2xl justify-center">
        <div className="hidden sm:block ">
          <Admin />
          {/* <p>Admin Panel</p> */}
          {Menus.map((menu, index) => {
            return (
              <div key={index} className="px-4 py-1">
                {menu.dropdown ? (
                  <li
                    onClick={handleSettingsOpen}
                    className={`flex flex-row text-center items-center px-3 py-1 hover:bg-slate-300 dark:bg-gray-800 dark:text-white bg-gray-200 rounded-md ${
                      location.pathname === menu.path
                        ? "bg-slate-300"
                        : "bg-gray-200"
                    }`}
                  >
                    <span className="py-2 px-3 text-xl">{menu.startIcon}</span>
                    <span className="pr-10 font-semibold">{t(menu.title)}</span>
                    <span>{menu.endIcon}</span>
                  </li>
                ) : (
                  <Link
                    className={`flex flex-row text-center items-center px-3 py-1 hover:bg-slate-300 dark:bg-gray-800 dark:text-white bg-gray-200 rounded-md ${
                      location.pathname === menu.path
                        ? "bg-slate-300"
                        : "bg-gray-200"
                    }`}
                    to={menu.path}
                  >
                    <span className="py-2 px-3 text-xl">{menu.startIcon}</span>
                    <p className="pr-10 font-semibold">{t(menu.title)}</p>
                  </Link>
                )}
                {menu.dropdown && settingsOpen && (
                  <ul>
                    {menu.dropdown.map((dropdownItem, dropdownIndex) => {
                      return (
                        <div key={dropdownIndex}>
                          {
                            <Link
                              to={dropdownItem.path}
                              className="flex flex-row items-center  dark:text-white pl-10 text-md "
                            >
                              <span className="p-2"> {dropdownItem.icon}</span>
                              <p className="p-2"> {dropdownItem.title}</p>
                            </Link>
                          }
                        </div>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Mobile Menu*/}
      <div ref={sidebar}>
        <HamburgerButton setMobileMenu={setMobile} mobileMenu={mobile} />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobile ? "flex" : "hidden"
          } absolute z-50 flex-col items-start pl-10 self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white bg-gray-50 dark:bg-slate-800 drop-shadow-md rounded-xl`}
        >
          {Menus.map((smallItem, id) => {
            return (
              <div key={id}>
                <Link
                  to={smallItem.path}
                  onClick={() => setMobile(false)}
                  className="flex flex-row items-center space-x-2 p-2 "
                >
                  {" "}
                  <span>{smallItem.startIcon}</span>
                  <p>{smallItem.title}</p>
                </Link>
              </div>
            );
          })}
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

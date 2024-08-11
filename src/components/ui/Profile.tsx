import { FC, useState, useRef, useEffect } from "react";
import Avatar from "../../assets/Avatar.jpg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiContactsLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { profileMenuType } from "../../types/types";
const Profile: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLDivElement>(null);
  // console.log(!dropdown.current)
  useEffect(() => {
    const handleClicker = (event: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(event.target as Node) ||
        trigger.current?.contains(event.target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", handleClicker);
    return () => document.removeEventListener("click", handleClicker);
  });

  const ProfileMenu: profileMenuType[] = [
    {
      title: "My Profile",
      icon: <CgProfile />,
    },
    {
      title: "My Contacts",
      icon: <RiContactsLine />,
    },
    {
      title: "Account Settings",
      icon: <IoSettingsOutline />,
    },
    {
      title: "Log Out",
      icon: <CiLogout />,
    },
  ];
  return (
    <div>
      <div className=" relative ">
        <div className="flex gap-4">
          <div className="flex gap-5 cursor-pointer items-center">
            <div
              className="flex gap-5 cursor-pointer items-center"
              ref={trigger}
              onClick={() => setDropdownOpen(true)}
            >
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={Avatar}
                alt="Avatar"
              />
              <div className="flex-row items-center hidden md:block">
                <p className="font-bold dark:text-white">
                  Babageldi Hudaynazarov
                </p>
                <p className="text-gray-400">Project Manager</p>
              </div>
            </div>
            <div
              className="p-4 pr-6 dark:text-white"
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
            >
              <button>{dropdownOpen ? <FaAngleDown /> : <FaAngleUp />}</button>
            </div>
          </div>
        </div>
        <div
          className={`${
            dropdownOpen
              ? "flex flex-col absolute p-4 h-72  w-64 top-20 right-10 items-center text-center justify-center gap-6 bg-slate-100  dark:bg-gray-800 dark:shadow-2xl "
              : "hidden"
          }`}
        >
          {ProfileMenu.map((item, index) => {
            return (
              <button
                key={index}
                className="text-black dark:text-white flex flex-row space-x-2 items-center gap-2.5 text-xl hover:text-purple-600 dark:hover:text-blue-300"
              >
                <span className="flex flex-start absolute left-4   ">
                  {item.icon}
                </span>
                <span className=" ">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;

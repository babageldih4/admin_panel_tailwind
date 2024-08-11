import { FC } from "react";
import Toggle from "../../common/theme/ThemeToggle";
import Notification from "../Notifcation";
import Profile from "../Profile";
import Language from "../../common/language/Language";
const Header: FC = () => {
  return (
    <div className="flex flex-row justify-end bg-slate-100  dark:border-gray-800 dark:bg-gray-800 dark:shadow-2xl space-x-3">
      <div className="flex flex-row items-center pr-4 space-x-3">
        <Notification />
        <Toggle />
        <Language />
      </div>
      <Profile />
    </div>
  );
};

export default Header;

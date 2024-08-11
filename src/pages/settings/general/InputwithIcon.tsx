import { FC } from "react";
import { InputIconProps } from "../../../types/types";

const InputWithIcon: FC<InputIconProps> = ({ icon, placeholder, type }) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-2 border dark:bg-slate-700 dark:text-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center dark:text-gray-100 pointer-events-none">
        {icon}
      </div>
    </div>
  );
};

export default InputWithIcon;

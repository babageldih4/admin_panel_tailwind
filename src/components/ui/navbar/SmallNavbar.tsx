import { type FC } from "react";
import { Link } from "react-router-dom";
const SmallNavbar: FC = () => {
  return (
    <div>
      {" "}
      <div className="hidden lg:flex lg:items-center lg: w-auto">
        <ul className=" block text-sm lg:flex-grow bg-black">
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            <Link to="/about">About</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            <Link to="/services">Services</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SmallNavbar;

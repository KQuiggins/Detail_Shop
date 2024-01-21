import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";


const Header: FC = (): ReactElement => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Logo />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Link 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Link 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Link 3
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

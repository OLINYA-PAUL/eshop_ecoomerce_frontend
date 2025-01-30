import React from "react";
import { NavItem } from "../../static/data";
import { Link } from "react-router-dom";

const NavBar = ({
  navItems,
  activeHeader,
}: {
  navItems: NavItem[];
  activeHeader: number;
}) => {
  return (
    <ul className="w-full flex items-center justify-center  ">
      {navItems &&
        navItems.map((items, index) => (
          <li
            key={items.url}
            className={`${
              activeHeader === index + 1 && "text-white"
            } p-5 cursor-pointer text-sm font-semibold text-green-400 `}
          >
            <Link to={items.url}>{items.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default NavBar;

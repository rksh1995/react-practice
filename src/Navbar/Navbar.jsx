import React from "react";
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { ImYoutube } from "react-icons/im";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="right-side-logo">
          <ImYoutube />
          Youtube
        </div>

        <div className="left-side-items">
          <ul>
            <li>
              <BiSolidVideoPlus />
            </li>
            <li>
              <IoMdNotifications />
            </li>
            <li>
              <BiUserCircle />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

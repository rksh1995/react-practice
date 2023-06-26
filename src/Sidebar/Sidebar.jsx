import React from "react";
import './sidebar.css';
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

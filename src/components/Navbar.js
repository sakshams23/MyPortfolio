import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/saksham.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="fixed w-full top-0 z-50 bg-slate-100 border-b border-gray-300">
      <div className="flex justify-between items-center p-5">
        <Link to="/" className="ml-1 laptop:ml-6">
          <img src={logo} alt="logo" className="h-6 laptop:h-8" />
        </Link>
        <ul className="hidden laptop:flex space-x-8 laptop:mr-6">
          <li className="text-lg laptop:transition laptop:transform laptop:hover:scale-110">
            <Link to="/">HOME</Link>
          </li>
          <li className="text-lg laptop:transition laptop:transform laptop:hover:scale-110">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="text-lg laptop:transition laptop:transform laptop:hover:scale-110">
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className="text-lg laptop:transition laptop:transform laptop:hover:scale-110">
            <Link to="/open-source">OPEN SOURCE</Link>
          </li>
          <li className="text-lg laptop:transition laptop:transform laptop:hover:scale-110">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className="laptop:hidden mr-2 cursor-pointer text-xl" onClick={showSidebar}>
          <RxHamburgerMenu />
        </div>
      </div>
      {sidebarVisible && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center p-4">
          <div className="w-full flex justify-end p-4 cursor-pointer text-xl" onClick={hideSidebar}>
            <RxCross1 />
          </div>
          <ul className="flex flex-col space-y-4">
            <li className="text-xl transition transform hover:scale-110">
              <Link to="/" onClick={hideSidebar}>HOME</Link>
            </li>
            <li className="text-xl transition transform hover:scale-110">
              <Link to="/about" onClick={hideSidebar}>ABOUT</Link>
            </li>
            <li className="text-xl transition transform hover:scale-110">
              <Link to="/projects" onClick={hideSidebar}>PROJECTS</Link>
            </li>
            <li className="text-xl transition transform hover:scale-110">
              <Link to="/open-source" onClick={hideSidebar}>OPEN SOURCE</Link>
            </li>
            <li className="text-xl transition transform hover:scale-110">
              <Link to="/contact" onClick={hideSidebar}>CONTACT</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

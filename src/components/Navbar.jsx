import React from "react";

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="bg-teal-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
    
        <h1
          onClick={() => onNavigate("home")}
          className="text-xl font-bold cursor-pointer hover:underline"
        >
          Wellness App
        </h1>

        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => onNavigate("health")}
              className="hover:underline"
            >
              Health & Wellness
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

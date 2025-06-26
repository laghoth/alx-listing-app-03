import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600 cursor-pointer">
        ALX Listing
      </div>

      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-blue-600">
          Rooms
        </a>
        <a href="#" className="hover:text-blue-600">
          Mansions
        </a>
        <a href="#" className="hover:text-blue-600">
          Countryside
        </a>
        <a href="#" className="hover:text-blue-600">
          Villas
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <input
          type="search"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button className="text-blue-600 font-semibold hover:underline">
          Sign In
        </button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;

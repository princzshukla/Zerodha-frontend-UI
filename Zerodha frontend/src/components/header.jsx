import React from "react";
import { Bell, ShoppingCart, Menu, MoreVertical } from "lucide-react";

const Header = ({ onToggleSidebar, onToggleMobileMenu }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-3 sm:px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-6 flex-1 min-w-0">
        {/* Mobile Menu Button */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden text-gray-600 hover:text-gray-900"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 flex items-center justify-center flex-shrink-0">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path d="M6 3L18 3L18 21L6 21L6 3Z" />
          </svg>
        </div>

        {/* Market Indices - Hidden on small mobile */}
        <div className="hidden sm:flex items-center gap-3 lg:gap-4 text-xs sm:text-sm overflow-x-auto">
          <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
            <span className="font-medium">NIFTY 50</span>
            <span className="font-semibold">25868.60</span>
            <span className="hidden md:inline text-gray-500">0.00 (0.00%)</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
            <span className="font-medium">SENSEX</span>
            <span className="font-semibold">84426.34</span>
            <span className="hidden md:inline text-green-600">
              62.97 (0.07%)
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        {/* Desktop Navigation - Hidden on mobile/tablet */}
        <nav className="hidden xl:flex gap-6">
          <a href="#" className="text-orange-600 font-medium whitespace-nowrap">
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
          >
            Orders
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
          >
            Holdings
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
          >
            Positions
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
          >
            Bids
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
          >
            Funds
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 cursor-pointer flex-shrink-0" />
          <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 cursor-pointer flex-shrink-0" />

          {/* User Avatar - Hidden on small mobile */}
          <div className="hidden sm:flex w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full items-center justify-center text-xs font-medium flex-shrink-0">
            UXU738
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onToggleMobileMenu}
            className="xl:hidden text-gray-600 hover:text-gray-900"
          >
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

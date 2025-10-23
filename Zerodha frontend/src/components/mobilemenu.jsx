import React from "react";
import { X } from "lucide-react";

const MobileMenu = ({ onClose }) => {
  const menuItems = [
    { name: "Dashboard", active: true },
    { name: "Orders", active: false },
    { name: "Holdings", active: false },
    { name: "Positions", active: false },
    { name: "Bids", active: false },
    { name: "Funds", active: false },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 shadow-xl">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-medium text-gray-900">Menu</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className={`block py-3 px-4 rounded mb-2 ${
                item.active
                  ? "bg-orange-50 text-orange-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={onClose}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium">
              UXU738
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">UXU738</div>
              <div className="text-xs text-gray-500">View Profile</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

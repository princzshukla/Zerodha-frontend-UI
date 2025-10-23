import React, { useState } from "react";
import { X } from "lucide-react";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded p-3 sm:p-4 mb-4 sm:mb-6 relative">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X className="h-4 w-4" />
      </button>
      <p className="text-xs sm:text-sm text-gray-700 pr-6">
        The equity, F&O, and currency markets will remain closed on October 22,
        2025, on account of Diwali-Balipratipada. Commodity markets will be
        closed for the first half, and trading will be open only in the evening
        session (5:00 pm onwards).{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Read more.
        </a>
      </p>
      <p className="text-xs sm:text-sm text-gray-700 mt-2">
        Your account setup is complete and ready to transact. Happy investing!
      </p>
    </div>
  );
};

export default NotificationBanner;

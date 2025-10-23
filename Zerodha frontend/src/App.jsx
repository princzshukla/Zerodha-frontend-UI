import React, { useState } from "react";
import Sidebar from "./components/sidebar.jsx";
import Header from "./components/header.jsx";
import Dashboard from "./components/dashboard.jsx";
import OrderWindow from "./components/ordermodel.jsx";
import MobileMenu from "./components/mobilemenu.jsx";

function App() {
  const [showOrderWindow, setShowOrderWindow] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleBuySell = (stock, type) => {
    setSelectedStock({ ...stock, type });
    setShowOrderWindow(true);
    setShowSidebar(false);
  };

  return (
    <div className="flex h-screen bg-gray-50 text-sm overflow-hidden">
      {/* Desktop Sidebar - Hidden on mobile/tablet */}
      <div className="hidden lg:block">
        <Sidebar onBuySell={handleBuySell} />
      </div>

      {/* Mobile/Tablet Sidebar - Overlay */}
      {showSidebar && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setShowSidebar(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 z-50 lg:hidden">
            <Sidebar
              onBuySell={handleBuySell}
              onClose={() => setShowSidebar(false)}
            />
          </div>
        </>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          onToggleSidebar={() => setShowSidebar(!showSidebar)}
          onToggleMobileMenu={() => setShowMobileMenu(!showMobileMenu)}
        />
        <Dashboard />
      </div>

      {/* Mobile Bottom Menu */}
      {showMobileMenu && (
        <MobileMenu onClose={() => setShowMobileMenu(false)} />
      )}

      {showOrderWindow && (
        <OrderWindow
          stock={selectedStock}
          onClose={() => setShowOrderWindow(false)}
        />
      )}
    </div>
  );
}

export default App;

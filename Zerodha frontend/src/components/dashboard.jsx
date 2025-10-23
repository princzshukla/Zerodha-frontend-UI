import React from "react";
import NotificationBanner from "./notificationbanner.jsx";
import PortfolioCards from "./portfolioCard.jsx";
import ChartSection from "./chartsection.jsx";

const Dashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
      <NotificationBanner />
      <h1 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
        Hi, User
      </h1>
      <PortfolioCards />
      <ChartSection />
    </div>
  );
};

export default Dashboard;

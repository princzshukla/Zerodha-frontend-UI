import React from 'react';
import { TrendingUp } from 'lucide-react';

const PortfolioCard = ({ title, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
        <h2 className="text-sm sm:text-base font-medium text-gray-800">{title}</h2>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-1 sm:mb-2">0</div>
        <div className="text-xs sm:text-sm text-gray-600 mb-1">Margin available</div>
      </div>
      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-gray-600">Margins used</span>
          <span className="font-medium">0</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm mt-2">
          <span className="text-gray-600">Opening balance</span>
          <span className="font-medium">0</span>
        </div>
      </div>
      <button className="w-full mt-3 sm:mt-4 text-blue-600 text-xs sm:text-sm hover:text-blue-700">
        ⊕ View statement
      </button>
    </div>
  );
};

const CommodityIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const PortfolioCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
      <PortfolioCard title="Equity" icon={TrendingUp} />
      <PortfolioCard title="Commodity" icon={CommodityIcon} />
    </div>
  );
};
export default PortfolioCards;

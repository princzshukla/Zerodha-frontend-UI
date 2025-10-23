import React from "react";
import { Search, X } from "lucide-react";
import { watchlistStocks } from "../data/stockdata.js";

const Sidebar = ({ onBuySell, onClose }) => {
  return (
    <div className="w-80 sm:w-96 lg:w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-600">Watchlist 1 (6 / 250)</span>
          <div className="flex items-center gap-2">
            <button className="text-xs text-blue-600 hover:text-blue-700">
              + New group
            </button>
            {onClose && (
              <button onClick={onClose} className="lg:hidden text-gray-600">
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search eg: infy bse, nifty fut, index fund, et"
            className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-1 bg-gray-50 text-xs font-medium text-gray-600">
          Default (6)
        </div>
        {watchlistStocks.map((stock, idx) => (
          <div
            key={idx}
            className="px-3 py-2 border-b border-gray-100 hover:bg-blue-50 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="font-medium text-gray-900">
                    {stock.symbol}
                  </span>
                  {stock.exchange && (
                    <span className="text-xs text-gray-500">
                      {stock.exchange}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-900">
                  {stock.ltp.toFixed(2)}
                </div>
                <div
                  className={`text-xs ${
                    stock.changePercent === 0
                      ? "text-gray-500"
                      : stock.changePercent > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stock.changePercent.toFixed(2)}%
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onBuySell(stock, "buy")}
                className="flex-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                B
              </button>
              <button
                onClick={() => onBuySell(stock, "sell")}
                className="flex-1 px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
              >
                S
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

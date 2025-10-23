import React, { useState } from "react";
import { X } from "lucide-react";

const OrderWindow = ({ stock, onClose }) => {
  const [orderType, setOrderType] = useState("regular");
  const [productType, setProductType] = useState("intraday");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(stock?.ltp || "");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div
          className={`px-4 py-3 flex items-center justify-between ${
            stock?.type === "buy" ? "bg-blue-600" : "bg-red-600"
          }`}
        >
          <h3 className="text-white font-medium text-sm sm:text-base">
            {stock?.type === "buy" ? "Buy" : "Sell"} {stock?.symbol}
          </h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setOrderType("regular")}
              className={`flex-1 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium ${
                orderType === "regular" ? "bg-gray-100" : "text-gray-600"
              }`}
            >
              Regular
            </button>
            <button
              onClick={() => setOrderType("cover")}
              className={`flex-1 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm ${
                orderType === "cover"
                  ? "bg-gray-100 font-medium"
                  : "text-gray-600"
              }`}
            >
              Cover
            </button>
            <button
              onClick={() => setOrderType("amo")}
              className={`flex-1 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm ${
                orderType === "amo"
                  ? "bg-gray-100 font-medium"
                  : "text-gray-600"
              }`}
            >
              AMO
            </button>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="0.00"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setProductType("intraday")}
              className={`flex-1 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium ${
                productType === "intraday" ? "bg-gray-100" : "text-gray-600"
              }`}
            >
              Intraday
            </button>
            <button
              onClick={() => setProductType("longterm")}
              className={`flex-1 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm ${
                productType === "longterm"
                  ? "bg-gray-100 font-medium"
                  : "text-gray-600"
              }`}
            >
              Longterm
            </button>
          </div>
          <button
            className={`w-full py-3 text-white rounded font-medium text-sm sm:text-base ${
              stock?.type === "buy"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {stock?.type === "buy" ? "Buy" : "Sell"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderWindow;

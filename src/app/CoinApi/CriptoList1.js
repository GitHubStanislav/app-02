import React from "react";
import Image from "next/image";

const CryptoList1 = ({ cryptocurrencies, exchangeRate }) => {
  const formatPercentage = (percentage) => {
    const roundedPercentage = parseFloat(percentage).toFixed(3);
    return roundedPercentage;
  };

  const getPercentageColor = (percentage) => {
    if (percentage < 0) {
      return "text-red-500";
    } else if (percentage > 0) {
      return "text-green-500";
    } else {
      return "text-gray-500";
    }
  };

  const formatCurrency = (value, currency) => {
    return `${currency}${value.toLocaleString()}`;
  };

  return (
    <ul className="mt-4 space-y-4 bg-gray-100 rounded-md divide-y divide-gray-200">
      <div className="bg-green-500 text-white flex justify-end mr-4-">
        <div className="w-full md:w-5/6 flex flex-wrap">
          <div className="w-1/4 font-semibold hidden md:block">
            Current Price (USD)
          </div>
          <div className="w-1/4 font-semibold hidden md:block">
            Current Price (UAH)
          </div>
          <div className="w-1/4 font-semibold hidden md:block">
            1-hour Price Change
          </div>
          <div className="w-1/4 font-semibold hidden md:block">
            24-hour Price Change
          </div>
        </div>
      </div>
      {cryptocurrencies.map((crypto) => (
        <li
          key={crypto.id}
          className="p-4 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center w-full md:w-1/6 mb-4 md:mb-0">
            <div className="mr-2">
              <Image
                src={crypto.image}
                alt={crypto.name}
                width={35}
                height={35}
              />
            </div>
            <h2 className="text-lg font-semibold mr-4">{crypto.name}</h2>
          </div>
          <div className="flex flex-col w-full md:w-5/6 md:flex-row md:flex-wrap">
            <div className="text-gray-500 w-full md:w-1/4 md:flex md:items-center mb-4 md:mb-0">
              <div className="font-medium">${crypto.current_price}</div>
            </div>
            <div className="text-gray-500 w-full md:w-1/4 md:flex md:items-center mb-4 md:mb-0">
              <div className="font-medium">
                {formatCurrency(crypto.current_price * exchangeRate, "₴")}
              </div>
            </div>
            <div
              className={`w-full md:w-1/4 md:flex md:items-center mb-4 md:mb-0 ${getPercentageColor(
                crypto.price_change_percentage_1h_in_currency
              )}`}
            >
              <div className="font-medium">
                {formatPercentage(
                  crypto.price_change_percentage_1h_in_currency
                )}
                %
              </div>
            </div>
            <div
              className={`w-full md:w-1/4 md:flex md:items-center mb-4 md:mb-0 ${getPercentageColor(
                crypto.price_change_percentage_24h_in_currency
              )}`}
            >
              <div className="font-medium">
                {formatPercentage(
                  crypto.price_change_percentage_24h_in_currency
                )}
                %
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CryptoList1;

import React from "react";
import Image from "next/image";

const CryptoList = ({ cryptocurrencies, exchangeRate }) => {
  return (
    <ul className="mt-4 space-y-4 bg-gray-100 rounded-md divide-y divide-gray-200">
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
            <h2 className="text-lg font-semibold">{crypto.name}</h2>
          </div>
          <div className="flex flex-col w-full md:w-5/6 md:flex-row md:flex-wrap">
            <div className="text-gray-500 w-full md:w-1/3 md:flex md:items-center mb-4 md:mb-0">
              <div>{crypto.current_price}</div>
            </div>
            <div className="text-gray-500 w-full md:w-1/3 md:flex md:items-center mb-4 md:mb-0">
              <div>{crypto.current_price * exchangeRate}</div>
            </div>
            <div className="text-gray-500 w-full md:w-1/3 md:flex md:items-center mb-4 md:mb-0">
              <div>{crypto.price_change_percentage_24h_in_currency}%</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CryptoList;

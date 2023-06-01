import React from "react";
import Image from "next/image";

const CoinList = ({ cryptocurrencies, exchangeRate }) => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">List Crypto</h1>
      <ul className="space-y-4">
        {cryptocurrencies.map((crypto) => {
          const priceInUAH = crypto.current_price * exchangeRate;
          return (
            <li
              key={crypto.id}
              className="bg-gray-800 p-4 rounded-md flex items-center space-x-4"
            >
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={crypto.image}
                    alt={crypto.name}
                    width={35}
                    height={35}
                  />
                </div>
                <div>
                  <p>
                    <span className="font-bold">{crypto.name}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-sm">{crypto.symbol}</span>
                  </p>
                  <div className="border-b border-gray-500 my-2"></div>
                  <p className="text-sm">
                    Current Price: ${crypto.current_price}
                  </p>
                  <p className="text-sm">
                    Price in UAH: ₴{priceInUAH.toFixed(2)}
                  </p>
                  <p className="text-sm">Market Cap: ${crypto.market_cap}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoinList;

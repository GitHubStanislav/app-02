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
              className="bg-gray-800 p-4 rounded-md flex items-center"
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
                  <p className="font-bold">{crypto.name}</p>
                  <p>Current Price: ${crypto.current_price}</p>
                  <p>Price in UAH: ₴{priceInUAH.toFixed(2)}</p>
                  <p>Market Cap: ${crypto.market_cap}</p>
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

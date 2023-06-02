import React from "react";
import Image from "next/image";

const CoinList = ({ cryptocurrencies, exchangeRate }) => {
  return (
    <div className="bg-white text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-4">List Crypto</h1>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {cryptocurrencies.map((crypto) => {
          const priceInUAH = crypto.current_price * exchangeRate;

          return (
            <li
              key={crypto.id}
              className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-between shadow-md"
            >
              <div className="flex items-start justify-center">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      <Image
                        src={crypto.image}
                        alt={crypto.name}
                        width={35}
                        height={35}
                      />
                    </div>
                    <p className="font-bold text-lg leading-tight">
                      {crypto.name}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-gray-500 uppercase">
                    {crypto.symbol.toUpperCase()}
                  </p>
                  <div className="border-b border-gray-500 my-2"></div>
                  <p className="text-sm">
                    Current Price:{" "}
                    <span className="font-bold">${crypto.current_price}</span>
                  </p>
                  <p className="text-sm">
                    Price in UAH:{" "}
                    <span className="font-bold">₴{priceInUAH.toFixed(2)}</span>
                  </p>
                  <p className="text-sm">
                    Market Cap:{" "}
                    <span className="font-bold">${crypto.market_cap}</span>
                  </p>
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

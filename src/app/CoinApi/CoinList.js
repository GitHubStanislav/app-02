import React from "react";
import Image from "next/image";

const CoinList = ({ cryptocurrencies, exchangeRate }) => {
  return (
    <div className="bg-white text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-4">List Crypto</h1>
      <ul className="space-y-4 flex flex-wrap">
        {cryptocurrencies.map((crypto) => {
          const priceInUAH = crypto.current_price * exchangeRate;
          return (
            <li
              key={crypto.id}
              className="bg-gray-100 p-4 rounded-md flex flex-col items-center space-y-2 w-64 h-50 m-4"
            >
              <div className="flex-1 w-full">
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
                    <p className="font-bold text-lg">{crypto.name}</p>
                    <p className="text-sm">Symbol: {crypto.symbol}</p>
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
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoinList;

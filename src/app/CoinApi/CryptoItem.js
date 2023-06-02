import React from "react";
import Image from "next/image";

const CryptoItem = ({ crypto, exchangeRate }) => {
  const priceInUAH = crypto.current_price * exchangeRate;

  return (
    <li className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-between shadow-md">
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
            <p className="font-bold text-lg leading-tight">{crypto.name}</p>
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
            Market Cap: <span className="font-bold">${crypto.market_cap}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default CryptoItem;

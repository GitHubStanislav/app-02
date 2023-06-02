import React from "react";
import CryptoItem from "./CryptoItem";

const CryptoList = ({ cryptocurrencies, exchangeRate }) => {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {cryptocurrencies.map((crypto) => (
        <CryptoItem
          key={crypto.id}
          crypto={crypto}
          exchangeRate={exchangeRate}
        />
      ))}
    </ul>
  );
};

export default CryptoList;

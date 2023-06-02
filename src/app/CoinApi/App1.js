import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import CryptoList from "./CryptoList";

const App1 = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [visibleCryptocurrencies, setVisibleCryptocurrencies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false&price_change_percentage=1h,24h,7d,30d,1y&market_data=false&community_data=false&developer_data=false"
        );
        setCryptocurrencies(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const uahExchangeRate = response.data.rates.UAH;
        setExchangeRate(uahExchangeRate);
      } catch (error) {
        console.log("Error fetching exchange rate:", error);
      }
    };

    fetchData();
    fetchExchangeRate();
  }, []);

  useEffect(() => {
    setVisibleCryptocurrencies(cryptocurrencies.slice(0, 30));
  }, [cryptocurrencies]);

  const fetchMoreCryptocurrencies = () => {
    const nextPage = page + 1;
    const newVisibleCryptocurrencies = cryptocurrencies.slice(0, nextPage * 20);
    setVisibleCryptocurrencies(newVisibleCryptocurrencies);
    setPage(nextPage);
  };

  return (
    <div className="bg-white text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-4">List Crypto</h1>
      <InfiniteScroll
        dataLength={visibleCryptocurrencies.length}
        next={fetchMoreCryptocurrencies}
        hasMore={visibleCryptocurrencies.length < cryptocurrencies.length}
        loader={<p>Loading more cryptocurrencies...</p>}
      >
        <CryptoList
          cryptocurrencies={visibleCryptocurrencies}
          exchangeRate={exchangeRate}
        />
      </InfiniteScroll>
    </div>
  );
};

export default App1;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoList1 from "./CriptoList1";

const App1 = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [visibleCryptocurrencies, setVisibleCryptocurrencies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    setVisibleCryptocurrencies(
      cryptocurrencies.slice((currentPage - 1) * 10, currentPage * 10)
    );
  }, [cryptocurrencies, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(cryptocurrencies.length / 10);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(cryptocurrencies.length / 10);
    const paginationItems = [];

    if (totalPages <= 5) {
      // Render all page buttons if total pages are less than or equal to 5
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
          <button
            key={i}
            className={`px-4 py-2 mx-1 rounded-md ${
              i === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-900"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Render 5 page buttons and navigation arrows for more than 5 total pages
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(startPage + 4, totalPages);

      if (startPage > 1) {
        paginationItems.push(
          <button
            key="previous"
            className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-900"
            onClick={handlePreviousPage}
          >
            &lt;
          </button>
        );
      }

      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(
          <button
            key={i}
            className={`px-4 py-2 mx-1 rounded-md ${
              i === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-900"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        paginationItems.push(
          <button
            key="next"
            className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-900"
            onClick={handleNextPage}
          >
            &gt;
          </button>
        );
      }
    }

    return paginationItems;
  };

  return (
    <div className="bg-white text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-4">List Crypto</h1>
      <CryptoList1
        cryptocurrencies={visibleCryptocurrencies}
        exchangeRate={exchangeRate}
      />
      <div className="flex justify-center mt-4">{renderPagination()}</div>
    </div>
  );
};

export default App1;

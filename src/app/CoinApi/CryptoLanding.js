import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="bg-blue-500">
        <nav className="container mx-auto py-4">
          <a className="text-white text-lg font-bold" href="/">
            CoinAPI
          </a>
          <ul className="flex">
            <li className="ml-4">
              <a className="text-white" href="#features">
                Features
              </a>
            </li>
            <li className="ml-4">
              <a className="text-white" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="ml-4">
              <a className="text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="container mx-auto py-24">
          <h1 className="text-4xl text-white font-bold mb-4">
            Powerful Cryptocurrency Data API
          </h1>
          <p className="text-lg text-white">
            Access real-time and historical market data for over 1000
            cryptocurrencies.
          </p>
          <a
            className="bg-white text-blue-500 px-6 py-2 mt-8 font-bold rounded hover:bg-blue-100 transition-colors duration-300"
            href="#contact"
          >
            Get Started
          </a>
        </div>
      </header>
      <section id="features" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="flex justify-between">
            <div className="w-1/3">
              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="text-3xl mb-4">Icon</div>
                <h3 className="text-xl font-bold mb-2">Real-Time Data</h3>
                <p className="text-gray-700">
                  Get up-to-date, accurate data for cryptocurrencies in
                  real-time.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="text-3xl mb-4">Icon</div>
                <h3 className="text-xl font-bold mb-2">Historical Data</h3>
                <p className="text-gray-700">
                  Access historical market data for in-depth analysis and
                  research.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="text-3xl mb-4">Icon</div>
                <h3 className="text-xl font-bold mb-2">Market Coverage</h3>
                <p className="text-gray-700">
                  Track over 1000 cryptocurrencies with comprehensive market
                  coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Pricing</h2>
          <div className="flex justify-center">
            <div className="w-1/3">
              <div className="bg-white rounded-lg p-8 mb-8 text-center">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <p className="text-gray-700 mb-4">Access to basic features</p>
                <p className="text-3xl font-bold mb-4">$0</p>
                <a
                  className="bg-blue-500 text-white px-6 py-2 font-bold rounded hover:bg-blue-600 transition-colors duration-300"
                  href="#contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2023 CoinAPI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

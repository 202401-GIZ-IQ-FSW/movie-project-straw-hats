import React from 'react';
import Navbar from '/components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Straw Hats</h1>
        <p className="text-lg text-gray-700 mb-6">Discover the latest movies, explore top-rated TV series, and read reviews from fellow movie enthusiasts.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </div>
    </div>
  );
};

export default HomePage;

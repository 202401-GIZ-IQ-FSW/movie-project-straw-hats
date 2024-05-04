import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="flex items-center justify-end" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bring Me Your Best..."
        value={searchTerm}
        onChange={handleChange}
        className="py-2 px-4 mr-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
      />
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

'use client'
import React from 'react'
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const CenterContent = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = () => {
        alert(`You asked: ${query}`);
        setQuery('');
    };
  return (
    <div className="flex flex-col items-center justify-center mt-24 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-700 mb-6 text-center">
          How can we <span className="text-pink-500">assist</span> you today?
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-xl">
          Ask anything! Code generation, documentation, or technical help — Genie is here for you.
        </p>
        <div className="flex w-full max-w-xl items-center bg-white rounded-full shadow-lg px-5 py-3">
          <input
            type="text"
            className="flex-grow outline-none text-lg text-gray-700"
            placeholder="Type your query here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSubmit} className="text-purple-600 hover:text-pink-500">
            <FaPaperPlane size={24} />
          </button>
        </div>
      </div>
  )
}

export default CenterContent

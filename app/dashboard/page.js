"use client";
import React, { useEffect, useState } from 'react';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [answer, setAnswer] = useState('');

  // Set document title
  useEffect(() => {
    document.title = "Dashboard - Get Me A Chai";
  }, []);

  // Redirect to login if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login');
    }
  }, [status, router]);

  // Handle answer submission (placeholder for chatbot integration)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted answer:', answer);
    setAnswer(''); // Clear input after submission
    // Later, integrate with your AI chatbot API here
  };

  // Show loading state while session is being checked
  if (status === "loading") {
    return <div className="text-white text-center py-14">Loading...</div>;
  }

  // Render dashboard only if authenticated
  if (status === "authenticated") {
    return (
      <div className="min-h-screen bg-gray-900 text-white">  

        {/* Main Content */}
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Project Questions
          </h2>

          {/* Chat Interface */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            {/* Chat Messages Area */}
            <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-700 rounded-lg">
              {/* Placeholder for chatbot questions */}
              <div className="mb-4">
                <p className="bg-blue-600 text-white p-3 rounded-lg inline-block max-w-xs">
                  What is the main goal of your project?
                </p>
              </div>
              {/* Placeholder for user answers */}
              <div className="mb-4 text-right">
                <p className="bg-green-600 text-white p-3 rounded-lg inline-block max-w-xs">
                  To create a crowdfunding platform.
                </p>
              </div>
              {/* Add more messages dynamically when chatbot is integrated */}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="flex-1 bg-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Dashboard;
"use client";

import { useState } from "react";

export default function TravelPlanner() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800">Travel Planner</h1>
        <TravelPlannerForm />
      </div>
    </div>
  );
}

const TravelPlannerForm = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    travelDates: '',
    interests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch('/api/travel-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch travel plan');
      }
  
      const data = await res.json();
      setResponse(data.plan || 'Something went wrong. No plan generated.');
    } catch (err) {
      console.error('Error fetching travel plan:', err.message);
      setResponse('Failed to fetch travel plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="px-8 py-6 bg-white rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="destination" className="block mb-2 font-bold text-gray-700">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded"
            placeholder="Enter your destination"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="travelDates" className="block mb-2 font-bold text-gray-700">
            Travel Dates
          </label>
          <input
            type="text"
            id="travelDates"
            name="travelDates"
            value={formData.travelDates}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded"
            placeholder="Enter your travel dates"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="interests" className="block mb-2 font-bold text-gray-700">
            Interests
          </label>
          <textarea
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded"
            placeholder="e.g., hiking, museums, food"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {loading ? (
            <svg
              className="w-5 h-5 mr-2 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 12h2z"
              ></path>
            </svg>
          ) : (
            'Get Travel Plan'
          )}
        </button>
      </form>

      {response && (
        <div
          className={`p-4 mt-6 rounded ${
            response.includes('Something went wrong')
              ? 'bg-red-50 text-red-700 border-red-200'
              : 'bg-green-50 text-green-700 border-green-200'
          }`}
        >
          <h2 className="text-lg font-bold">Your Travel Plan</h2>
          <p className="whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  );
};

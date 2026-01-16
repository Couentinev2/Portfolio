"use client";

import { useState } from "react";
import { MapPin, Calendar, Sparkles, Plane, Loader2 } from "lucide-react";

export default function TravelPlanner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/50" />
      </div>

      <div className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Hero Text */}
        <div className="text-white pt-10 hidden md:block">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Discover Your <br />
            <span className="text-blue-400">Next Adventure</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Stop worrying about the logistics. Let our AI travel architect craft 
            the perfect itinerary tailored to your specific interests and schedule.
          </p>
          
          <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-500/20 rounded-full text-blue-400">
                <Sparkles size={16} />
              </div>
              <span>AI Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-purple-500/20 rounded-full text-purple-400">
                <Plane size={16} />
              </div>
              <span>Global Reach</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
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
    setResponse(''); // Clear previous response

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
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Plan Your Trip</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Destination Input */}
          <div className="space-y-2">
            <label htmlFor="destination" className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <MapPin size={16} /> Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full bg-gray-800/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition placeholder-gray-500"
              placeholder="e.g., Kyoto, Japan"
              required
            />
          </div>

          {/* Dates Input */}
          <div className="space-y-2">
            <label htmlFor="travelDates" className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Calendar size={16} /> Travel Dates
            </label>
            <input
              type="text"
              id="travelDates"
              name="travelDates"
              value={formData.travelDates}
              onChange={handleChange}
              className="w-full bg-gray-800/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition placeholder-gray-500"
              placeholder="e.g., Oct 12 - Oct 20"
              required
            />
          </div>

          {/* Interests Input */}
          <div className="space-y-2">
            <label htmlFor="interests" className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Sparkles size={16} /> Interests
            </label>
            <textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="w-full bg-gray-800/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition placeholder-gray-500 min-h-[100px] resize-none"
              placeholder="e.g., hiking, ramen shops, history, photography"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Crafting Itinerary...</span>
              </>
            ) : (
              'Generate Plan'
            )}
          </button>
        </form>
      </div>

      {/* Response Area */}
      {response && (
        <div className="bg-white border-t border-gray-100 p-8 animate-in slide-in-from-bottom-5 duration-500">
          <div className="flex items-center gap-2 mb-4">
             <div className="h-2 w-2 rounded-full bg-green-500"></div>
             <h3 className="font-bold text-gray-800 uppercase tracking-wide text-sm">Itinerary Ready</h3>
          </div>
          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};
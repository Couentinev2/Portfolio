'use client';
import { useState } from 'react';


export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: null, error: null });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || 'Something went wrong');
      }

      // If successful
      setStatus({ submitting: false, success: 'Your message has been sent!', error: null });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, success: null, error: error.message });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Contact Me</h1>
        <p className="mb-6 text-gray-600">
          Have any questions or want to work together? Send me a message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={form.name}
              className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={form.email}
              className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows="4"
              onChange={handleChange}
              value={form.message}
              className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Status Messages */}
        {status.success && (
          <p className="mt-4 rounded bg-green-100 p-2 text-green-700">
            {status.success}
          </p>
        )}
        {status.error && (
          <p className="mt-4 rounded bg-red-100 p-2 text-red-700">{status.error}</p>
        )}
      </div>
    </main>
  );
}

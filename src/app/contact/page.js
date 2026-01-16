'use client';
import { useState } from 'react';
import Link from 'next/link';

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
      setStatus({ submitting: false, success: 'Your message has been sent successfully!', error: null });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, success: null, error: error.message });
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      
      {/* BACKGROUND GRID PATTERN */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* NAV BACK */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-indigo-400 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-lg p-8 border border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur-md shadow-2xl shadow-black/50">
        
        {/* Glow effect behind the card */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <h1 className="mb-2 text-3xl font-bold text-white">Get in Touch</h1>
        <p className="mb-8 text-slate-400">
          Have a project in mind or just want to say hi? Send me a message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
              Your Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={form.name}
              placeholder="John Doe"
              className="w-full px-4 py-3 text-white placeholder-slate-600 transition-colors border rounded-lg bg-slate-950/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={form.email}
              placeholder="john@example.com"
              className="w-full px-4 py-3 text-white placeholder-slate-600 transition-colors border rounded-lg bg-slate-950/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows="4"
              onChange={handleChange}
              value={form.message}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 text-white placeholder-slate-600 transition-colors border rounded-lg bg-slate-950/50 border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full px-6 py-3 font-semibold text-white transition-all transform bg-indigo-600 rounded-lg hover:bg-indigo-700 hover:scale-[1.02] focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status.submitting ? (
                <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                </span>
            ) : 'Send Message'}
          </button>
        </form>

        {/* Status Messages */}
        {status.success && (
          <div className="p-4 mt-6 text-sm text-green-300 border border-green-500/30 rounded-lg bg-green-500/10">
            <span className="font-bold">Success!</span> {status.success}
          </div>
        )}
        {status.error && (
          <div className="p-4 mt-6 text-sm text-red-300 border border-red-500/30 rounded-lg bg-red-500/10">
            <span className="font-bold">Error:</span> {status.error}
          </div>
        )}
      </div>
    </main>
  );
}
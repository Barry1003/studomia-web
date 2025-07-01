// Admin.jsx
import React from "react";

export default function Admin() {
  return (
    <section className="bg-white py-16">
      {/* Top badge */}
      <div className="flex justify-center mb-8">
        <span className="inline-flex items-center bg-green-50 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
          <span className="mr-2">🏫</span>
          For Administrators, School-Level Leaders And Cultural Leaders,
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Put Your School On The Map.
        </h1>

        {/* Intro text */}
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">
            🔒 Join a Network of Future-Focused Institutions
          </strong>{" "}
          – Showcase your school’s identity, unlock smart tools for tracking
          performance, and access a growing ecosystem of talent,
          partnerships, and opportunity.
        </p>

        {/* Tagline */}
        <p className="text-base font-medium text-gray-800">
          Build visibility. Strengthen credibility. Grow with purpose.
        </p>

        {/* Call-to-action pill */}
        <button className="inline-flex items-center border-2 border-indigo-300 text-indigo-600 text-sm font-medium rounded-full px-5 py-2 hover:bg-indigo-50 transition">
          <span className="mr-2">🔐</span>
          Now enrolling verified institutions – Apply for early access
        </button>
      </div>

      {/* Large green mockup */}
      <div className="mt-12 mx-auto max-w-5xl px-6">
        <div className="w-full h-90 bg-green-400 rounded-xl"></div>
      </div>

      {/* Slider dots */}
      <div className="mt-6 flex justify-center space-x-2">
        <span className="w-10 h-1 rounded-full bg-green-400"></span>
        <span className="w-10 h-1 rounded-full bg-gray-200"></span>
        <span className="w-10 h-1 rounded-full bg-gray-200"></span>
        <span className="w-10 h-1 rounded-full bg-gray-200"></span>
      </div>
    </section>
  );
}

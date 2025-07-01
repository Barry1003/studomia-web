// GuildEventsSection.jsx
import React from "react";

const events = [
  {
    id: 1,
    emoji: "🎨",
    title: "Creative Class Mixers & Exhibitions",
    imageUrl: "/images/mixers.jpg",        // replace with your real URLs
    location: "Lagos",
    date: "September 2025",
    description:
      "A Vibrant Gathering Of Creators, Storytellers, And Industry Voices. Featuring Showcases, Skill-Building Workshops, And Collaborations That Spark Real-World Projects.",
    primaryText: "Register to Attend",
    secondaryText: "Apply to Showcase Work",
  },
  {
    id: 2,
    emoji: "🏛️",
    title: "Data-Informed School Leaders Summit",
    imageUrl: "/images/summit.jpg",
    location: "Hybrid (Lagos + Online)",
    date: "October 2025",
    description:
      "A Summit For School Leaders, Educators, And Institutions Exploring How Data, AI, And Creativity Can Transform Education From The Inside Out. Join Panels, Workshops, Innovation, Networking.",
    primaryText: "Join the Summit",
    secondaryText: "Speaker/School Interest",
  },
  {
    id: 3,
    emoji: "🎩",
    title: "Policy Roundtables & Executive Dinners",
    imageUrl: "/images/dinners.jpg",
    location: "Lagos, Nigeria",
    date: "November 2025",
    description:
      "Closed-Door Sessions For Education Leaders, Funders, And Cultural Policymakers To Co-Create Scalable, Equitable Innovation Across Africa. Apply To Attend As A Policymaker, Funder, Or Institutional Leader.",
    primaryText: "Apply for Access",
    secondaryText: "Sponsor a Table",
  },
];

export default function GuildEventsSection() {
  return (
    <section className="bg-white py-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Experience the Future of <br className="hidden md:block" />
          Education & Creativity
        </h2>
        <p className="text-base text-gray-600">
          A curated series of immersive events powered by the Studomia Guild
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
            Join the Guild
          </button>
          <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition">
            Become a Partner
          </button>
        </div>
      </div>

      {/* Event Cards */}
      <div className="mt-12 max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <div
            key={e.id}
            className="flex flex-col bg-white rounded-xl shadow overflow-hidden"
          >
            <img
              src={e.imageUrl}
              alt={e.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-green-600 mb-2 flex items-center">
                <span className="mr-2">{e.emoji}</span>
                {e.title}
              </h3>

              <div className="text-sm text-gray-500 mb-4 flex items-center space-x-4">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 2a4 4 0 00-4 4v3a1 1 0 102 0V6a2 2 0 112 0v3a1 1 0 102 0V6a4 4 0 00-4-4z" />
                    <path d="M18 8h-2a1 1 0 100 2h2v6H4v-6h2a1 1 0 100-2H4a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2z" />
                  </svg>
                  {e.location}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
                    <path d="M4 5a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H4z" />
                  </svg>
                  {e.date}
                </span>
              </div>

              <p className="text-gray-700 text-sm flex-1">{e.description}</p>

              <div className="mt-6 space-y-3">
                <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                  {e.primaryText}
                </button>
                <button className="w-full px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition">
                  {e.secondaryText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

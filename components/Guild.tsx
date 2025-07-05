// CoCreateSection.jsx
 

const coCreateCards = [
  {
    id: 1,
    icon: "🧪",
    title: "Be Part of Product R&D Labs",
    items: [
      "🕑 Early access to features",
      "🧠 Test new tools with our team",
      "📊 Contribute insights that shape the platform",
    ],
    buttonText: "Join the R&D Circle",
  },
  {
    id: 2,
    icon: "📝",
    title: "Share Feedback, Shape Innovation",
    items: [
      "📋 Community surveys",
      "💬 1-on-1 research sessions",
      "✏️ User-driven design reviews",
    ],
    buttonText: "Submit Feedback",
  },
  {
    id: 3,
    icon: "🏅",
    title: "Get Recognized for Your Contributions",
    items: [
      "✅ Verified Contributor Tags",
      "🏷️ Digital badges & public recognition",
      "🏛️ Featured on Guild Walls of Impact",
    ],
    buttonText: "Become a Contributor",
  },
];

const whyItMatters = [
  {
    id: 1,
    icon: "💡",
    title: "Build tools the community actually needs",
  },
  {
    id: 2,
    icon: "🔍",
    title: "Ensure solutions are research-backed",
  },
  {
    id: 3,
    icon: "🤝",
    title: "Grow trust and transparency across the ecosystem",
  },
];

export default function CoCreateSection() {
  return (
    <section className="bg-white py-16">
      {/* Intro */}
      <div className="max-w-3xl mx-auto px-6 text-center space-y-2">
        <h3 className="text-lg font-medium text-gray-700 flex items-center justify-center">
          🌍 A Platform You Can Feel
        </h3>
        <p className="text-sm text-gray-500 italic">
          “Each event is a gateway into the Studomia experience—where ideas spark
          impact, and community drives change.”
        </p>
        <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center justify-center">
         🌍 Co-Create the Future With Us
        </h2>
        <p className="text-base font-bold  text-gray-600">
          Studomia is more than a platform — it’s a community-powered movement for
          learning, creativity, and innovation.
        </p>
      </div>

      {/* Co-Create Cards */}
      <div className="mt-12 max-w-6xl mx-auto px-6 grid gap-8 grid-cols-1 md:grid-cols-3">
        {coCreateCards.map((card) => (
          <div
            key={card.id}
            className="border-2 border-indigo-200 rounded-xl p-6 flex flex-col"
          >
            <h4 className="text-xl font-semibold text-[#0C13D5] flex flex-col items-start mb-4">
              <span className="mr-2 text-4xl">{card.icon}</span>
              {card.title}
            </h4>
            <ul className="flex-1 space-y-2 gap-3 text-gray-700 mb-6">
              {card.items.map((item, idx) => (
                <li key={idx} className="flex flex-col my-8 font-bold items-start">
                  <span className="mr-2 leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-auto px-4 py-2 bg-[#0D15EA] text-white font-medium rounded-md hover:bg-blue-700 transition">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Why It Matters */}
      <div className="mt-16 max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center mb-8">
          <span className="mr-2">🔄</span>
          Why It Matters
        </h3>
        <div className="grid gap-2 sm:gap-6  grid-cols-3">
          {whyItMatters.map((item) => (
            <div
              key={item.id}
              className="bg-green-50 rounded-lg p-6 text-center flex flex-col items-center"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <p className="font-medium text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// This component can be imported and used in your main application file or wherever needed
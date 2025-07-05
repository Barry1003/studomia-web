// GuildEventsSection.jsx
import { Calendar, MapPin } from "lucide-react";


const events = [
  {
    id: 1,
    emoji: "🎨",
    title: "Creative Class Mixers & Exhibitions",
    imageUrl: "/edu1.jpg",        
    Details:[
      'Where Talent Meets Opportunity.'
    ],
    location: "Lagos",
    date: "September 2025",
    description:
      "A Vibrant Gathering Of Creators, Storytellers, And Industry Voices. Featuring Showcases, Skill-Building Workshops, And Collaborations That Spark Real-World Projects.",
    primaryText: "Register to Attend",
    secondaryText: "Apply to Showcase Work",
    footer: 'Gain exposure, connect with peers, and get featured on the platform.'
  },
  
  {
    id: 2,
    emoji: "🏛️",
    title: "Data-Informed School Leaders Summit",
    imageUrl: "/edu2.png",
    Details:[
      'Lead With Vision. ',
      'Act With Data.'
    ],
    location: "Hybrid (Lagos + Online)",
    date: "October 2025",
    description:
      "A Summit For School Leaders, Educators, And Institutions Exploring How Data, AI, And Creativity Can Transform Education From The Inside Out. Join Panels, Workshops, Innovation, Networking.",
    primaryText: "Join the Summit",
    secondaryText: "Speaker/School Interest",
    footer: 'Connect with peers, gain platform perks, and contribute insights.'
  },
  
  {
    id: 3,
    emoji: "🎩",
    title: "Policy Roundtables & Executive Dinners",
    imageUrl: "/edu3.png",
    Details:[
      'Shape Ideas. ',
      'Influence Change.',
      'Build Alliances.'
    ],
    location: "Lagos, Nigeria",
    date: "November 2025",
    description:
      "Closed-Door Sessions For Education Leaders, Funders, And Cultural Policymakers To Co-Create Scalable, Equitable Innovation Across Africa. Apply To Attend As A Policymaker, Funder, Or Institutional Leader.",
    primaryText: "Apply for Access",
    secondaryText: "Sponsor a Table",
    footer: 'Shape future policy, fund innovation, and network with leaders'
  },
  
];

export default function GuildEventsSection() {
  
  return (
    <section className="bg-white py-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          🌐 Experience the Future of<br className="hidden md:block" />
          Education & Creativity
        </h2>
        <p className="text-base text-gray-600">
          🎟 A curated series of immersive events powered by the Studomia Guild.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 bg-[#0D15EA] text-white rounded-full  font-medium   hover:bg-[#0D15EA] transition">
            Join the Guild
          </button>
          <button className="px-6 py-2 border-2 border-[#9093F5] text-gray-700 font-medium rounded-full hover:bg-gray-50 transition">
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
              <h3 className="text-3xl font-extrabold text-[#033A1B] mb-2 flex items-center">
                {e.emoji}
                {e.title}
              </h3>
              <div className="flex gap-3 items-center jusitify-start">{e.Details}</div>
              <div className="text-sm text-gray-500 mb-4 flex items-center space-x-4">
                <span className="flex items-center">
                   <MapPin  size={20} className="text-[#0C13D5]"/>
                  {e.location}
                </span>
                <span className="flex items-center">
                  <Calendar size={20} className="text-[#0C13D5]" />
                  {e.date}
                </span>
              </div>

              <p className="text-gray-700 text-sm flex-1">{e.description}</p>

              <div className="mt-6 space-y-3">
                <button className="w-full px-6 py-2 bg-[#0D15EA] text-white text-2xl font-medium rounded-md hover:bg-blue-700 transition">
                  {e.primaryText}
                </button>
                <button className="w-full px-4 py-2 border-2 border-[#9093F5] text-xl text-gray-700 font-medium rounded-md hover:bg-gray-50 transition">
                  {e.secondaryText}
                </button>
              </div>
              <div className="font-bold text- mt-4 text-center text-[#263238]">{e.footer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

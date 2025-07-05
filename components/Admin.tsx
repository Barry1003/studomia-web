 import useCarousel from "./carousel";
import { CircleArrowRight } from "lucide-react";

const adminCards = [
  {
    title: "Put Your School On The Map.",
    intro: (
      <>
        <strong className="font-semibold text-gray-900">
          🔒 Join a Network of Future-Focused Institutions
        </strong>{" "}
        – Showcase your school’s identity, unlock smart tools for tracking
        performance, and access a growing ecosystem of talent,
        partnerships, and opportunity.
      </>
    ),
    tagline: "Build visibility. Strengthen credibility. Grow with purpose.",
    buttonText: "Now enrolling verified institutions – Apply for early access",
    Image: "/Section4.1.png"
  },
  {
    title: "Highlight Your School’s Achievements.",
    intro: (
      <>
        <strong className="font-semibold text-gray-900">
          🎓 Display Student Excellence
        </strong>{" "}
        – From academic scores to extracurricular highlights, showcase what makes your school unique.
      </>
    ),
    tagline: "Pride in performance. Power in visibility.",
    buttonText: "Upload your school's highlights today",
    Image: "/Section4.2.png"
  },
  {
    title: "Empower Your Staff and Culture.",
    intro: (
      <>
        <strong className="font-semibold text-gray-900">
          💼 Equip Leaders & Educators
        </strong>{" "}
        
        – Provide tools and spaces for collaboration, evaluation, and growth.
      </>
    ),
    tagline: "A strong culture builds strong schools.",
    buttonText: "Explore leadership tools now",
    Image: "/Section4.3.png"
  },
  {
    title: "Empower Your Staff and Culture.",
    intro: (
      <>
        <strong className="font-semibold text-gray-900">
          💼 Equip Leaders & Educators
        </strong>{" "}
        – Provide tools and spaces for collaboration, evaluation, and growth.
      </>
    ),
    tagline: "A strong culture builds strong schools.",
    buttonText: "Explore leadership tools now",
    Image: "/Section4.4.png"
  },
];

export default function Admin() {
  const { index, setIndex, onSwipeX , handleNext} = useCarousel(adminCards.length);
  const card = adminCards[index];

  return (
    <section className="bg-white py-16">
      {/* 🔒 Header stays static */}
      <div className="flex flex-col items-center justify-center mb-8">
        <span className="inline-flex items-center bg-green-50 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
          <span className="mr-2">🏫</span>
          For Administrators, School-Level Leaders And Cultural Leaders
        </span>\
        <div className="font-semibold text-xl">📈 Unlock data-driven insights, 🤝 engage communities, and 🧩 transform institutional effectiveness.</div>
      </div>

      {/* 🟩 Card container with swipe handling */}
      <div className="max-w-4xl mx-auto px-6" {...onSwipeX}>
        <div className="text-center space-y-6 select-none">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {card.title}
          </h1>

          <p className="text-lg text-gray-700">{card.intro}</p>

          <p className="text-base font-medium text-gray-800">{card.tagline}</p>

          <button className="inline-flex items-center border-2 border-indigo-300 text-[#272E3D]  text-xl font-bold rounded-full px-5 py-3 hover:bg-indigo-50 transition">
            <span className="mr-2">🔐</span>
            {card.buttonText}
          </button>
        </div>

        {/* 🖼 Mockup */}
        <div className="mt-12">
          <div className={`w-full   rounded-xl`}>
            <img src={card.Image} className="object-cover" alt="" />
          </div>
        </div>
      </div>

      {/* ⭕ Pagination Dots */}
      <div className="mt-12 flex justify-center gap-4 items-center space-x-2">
        {adminCards.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer w-20 h-1.5 rounded-full transition ${
              i === index ? "bg-[#0D15EA]" : "bg-[#9747FF]"
            }`}
          ></span>
        ))}
        <div className="p-2 rounded-full bg-[#2BF388] cursor-pointer" onClick={handleNext}><CircleArrowRight size={20} className="text-white"/></div>
      </div>
    </section>
  );
}

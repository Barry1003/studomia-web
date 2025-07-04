import React from "react"; 
import useCarousel from "./carousel";
import { CircleArrowDown } from "lucide-react";

const cardList = [
  {
    title: "👥 Teachers, Coaches, Trainers, Facilitators & Mentors",
    subtitle: "🎓 Improve Your Practice With the Educator Portfolio",
    Image: "Section3.1.png",
    description: "Join as An Educator, Teacher or Mentor",
  },
  {
    title: "📊 Teach Smarter With Real-Time Insight",
    subtitle: "📈 Use AI-backed dashboards and analytics to personalize instruction, monitor impact, and improve learner outcomes.",
    Image: "Section3.2.png",
    description: "Join as a Business Owner or Startup Founder",
  },
  {
    title: "📁 Build and Showcase Your Educator Identity",
    subtitle: "🧑‍🏫 Curate your teaching journey, document classroom success, and grow your presence across the Guild.",
    Image: "Section3.3.png",
    description: "Build Your Educator Portfolio",
  },
  {
    title: "✏️ Design Smarter Lessons. Teach With Impact",
    subtitle: "🧩 Use AI-supported planning tools to confidently build, personalize, and publish dynamic learning resources—tailored to every learner's needs.",
    Image: "Section3.4.png",
    description: "Start Planning with AI",
  },
];

export default function Educator() {
  const { index, setIndex, onSwipeY, handleNext } = useCarousel(cardList.length);

  return (
    <section className="bg-white py-12">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
          <span className="mr-2">🧱</span>
          For Educators, Teachers, Trainers & Coaches
        </span>
      </div>

      {/* Slide container */}
      <div className="mx-auto flex gap-4 relative max-w-5xl px-6">
        {/* Vertical markers */}
        <div className="flex flex-col justify-center items-center space-y-4 px-4">
          {cardList.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1 h-14 rounded cursor-pointer ${
                i === index ? "bg-[#2BF388]" : "bg-[#0D15EA] bg-opacity-20"
              }`}
            ></div>
          ))}
          <div className="p-2 rounded-full bg-[#2BF388] cursor-pointer" onClick={handleNext}><CircleArrowDown size={20} className="text-white"/></div>
        </div>

        {/* Current card only */}
        <div
          {...onSwipeY}
          className="relative bg-[#0D15EA] w-full md:w-[1066pX] rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-10 md:pl-36">
            <div className="text-white space-y-6">
              <h1 className="text-xl md:text-3xl font-bold leading-snug">
                {cardList[index].title}
              </h1>
              <p className="text-lg opacity-80">{cardList[index].subtitle}</p>
              <p className="text-base opacity-80">
                {cardList[index].description}
              </p>
            </div>

            {/* Placeholder */}
      <div className="w-full h-[755px] md:h-[547px] bg-blue-900 rounded-xl">
  <img
    src={cardList[index].Image}
    alt=""
    className="w-full h-full object-cotain"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle, Palette } from "lucide-react";
import useCarousel from "./carousel";

const cards = [
  {
    title: "🎨 Showcase Your Works",
    subtitle: "🖼 Build your portfolio, highlight your creative talents, and present your best projects.",
    cta: "Start My Portfolio",
    image: "/section2.1.png",
    bgColor: "#8638E5",
  },
  {
    title: "💼 Turn Your Creativity Into Opportunity",
    subtitle: "🤝 Monetize your work, collaborate with peers, and get discovered by organizations—all from your profile.",
    cta: "Launch Your Creative Profile",
    image: "/CardContent2.png",
    bgColor: "#8638E5",
  },
  {
    title: "🧠 Create Smarter, Express Freely",
    subtitle: "⚡ Use AI-powered tools to streamline your creative process, gain insights, and bring your ideas to life",
    cta: "Create With AI Tools  ",
    image: "/CardContent3.png",
    bgColor: "#8638E5",
  },
];

export default function ShowcaseSection() {
   const {onSwipeX } = useCarousel(cards.length);
  const [current, setCurrent] = useState(0);
  const length = cards.length;

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };
  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const leftIndex = (current - 1 + length) % length;
  const rightIndex = (current + 1) % length;

  return (
    <section className="w-full bg-white py-10 overflow-hidden px-4 flex flex-col items-center">
      {/* Section Header */}
      <div className="mb-8 border-2 border-dotted border-blue-300 px-4 py-1 rounded-md flex items-center gap-2 max-w-4xl w-full">
        <Palette className="text-yellow-500" />
        <h2 className="text-blue-900 font-bold text-lg">
          Creatives, Professionals & Talents
        </h2>
      </div>

      {/* Showcase Container */}
      <div 
      {...onSwipeX}
      className="relative flex items-center justify-center gap-4 max-w-full w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Left blurred card */}
        <div
          style={{ backgroundColor: cards[leftIndex].bgColor }}
          className="hidden md:flex absolute -left-40 top-0 rounded-2xl w-96 h-[450px] items-center justify-center filter blur-sm select-none pointer-events-none"
        >
          <CardContent card={cards[leftIndex]} blurred />
        </div>

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-0 z-20 p-2 rounded-full bg-[#9093F5] bg-opacity-70 hover:bg-opacity-100 transition hidden md:flex"
          style={{ top: "calc(50% - 20px)" }}
        >
          <ArrowLeftCircle size={40} className="text-white" />
        </button>

        {/* Main card */}
        <div
          style={{ backgroundColor: cards[current].bgColor }}
          className="rounded-3xl p-8 w-full max-w-2xl min-h-[450px] shadow-lg flex flex-col sm:flex-row  md:items-center items-start gap-6 text-white"
        >
          <CardContent card={cards[current]} />
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-0 z-20 p-2 rounded-full bg-[#9093F5] bg-opacity-70 hover:bg-opacity-100 transition hidden md:flex"
          style={{ top: "calc(50% - 20px)" }}
        >
          <ArrowRightCircle size={40} className="text-white" />
        </button>

        {/* Right blurred card */}
        <div
          style={{ backgroundColor: cards[rightIndex].bgColor }}
          className="hidden md:flex absolute -right-40 top-0 rounded-2xl w-96 h-[450px] items-center justify-center filter blur-sm select-none pointer-events-none"
        >
          <CardContent card={cards[rightIndex]} blurred />
        </div>
      </div>
    </section>
  );
}

function CardContent({
  card,
  blurred = false,
}: {
  card: {
    title: string;
    subtitle: string;
    cta: string;
    image: string;
    bgColor: string;
  };
  blurred?: boolean;
}) {
  return (
    <>
      <div className="flex flex-col gap-12 w-full sm:w-1/2 flex-wrap justify-even items-start select-none">
        <h3
          className={`text-4xl font-bold leading-snug ${
            blurred ? "opacity-60" : ""
          }`}
        >
          {card.title}
        </h3>
         <p className={`text-xl font-semibold ${blurred ? "opacity-50" : ""}`}>
          {card.subtitle}
        </p>
        <h4 className={`text-sm ${blurred ? "opacity-40" : ""}`}>{card.cta}</h4>
      </div>
      <img
        src={card.image}
        alt={card.title}
        className={`rounded-lg mt-4 object-contain w-full sm:w-1/2 h-[420px] ${
          blurred ? "opacity-40" : ""
        }`}
        draggable={false}
      />
    </>
  );
}

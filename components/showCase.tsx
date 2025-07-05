import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import useCarousel from "./carousel";

const cards = [
  {
    title: "🎨 Showcase Your Works",
    subtitle:
      "🖼 Build your portfolio, highlight your creative talents, and present your best projects.",
    cta: "Start My Portfolio",
    image: "/section2.1.png",
    bgColor: "#8638E5",
  },
  {
    title: "💼 Turn Your Creativity Into Opportunity",
    subtitle:
      "🤝 Monetize your work, collaborate with peers, and get discovered by organizations—all from your profile.",
    cta: "Launch Your Creative Profile",
    image: "/CardContent2.png",
    bgColor: "#8638E5",
  },
  {
    title: "🧠 Create Smarter, Express Freely",
    subtitle:
      "⚡ Use AI-powered tools to streamline your creative process, gain insights, and bring your ideas to life",
    cta: "Create With AI Tools",
    image: "/CardContent3.png",
    bgColor: "#8638E5",
  },
];

export default function ShowcaseSection() {
  const { onSwipeX } = useCarousel(cards.length);
  const [current, setCurrent] = useState(0);
  const length = cards.length;

  // Guard if no cards to avoid undefined errors
  if (length === 0) return null;

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };
  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const leftIndex = (current - 1 + length) % length;
  const rightIndex = (current + 1) % length;

  // Local card variables
  const currentCard = cards[current];
  const leftCard = cards[leftIndex];
  const rightCard = cards[rightIndex];

  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 flex flex-col items-center overflow-x-visible relative">
      {/* Section Header */}
      <div className="mb-6 px-4 py-2 flex flex-col gap-4 items-center text-center justify-center">
        <div className="bg-[#F7FFFA] px-4 py-2 rounded-full">
          <h2 className="text-blue-900 font-bold text-lg sm:text-xl">
            🎨 Creatives, Professionals & Talents
          </h2>
        </div>
        <p className="font-medium text-[#050962] bg-white">
          🖼 Showcase your work, 🎤 collaborate with peers, and 💼 build creative
          careers.
        </p>
      </div>

      {/* Showcase Container */}
      <div
        {...onSwipeX}
        className="relative flex items-center justify-center w-full max-w-full sm:px-6 lg:px-8 overflow-visible"
      >
        {/* Left blurred card */}
        <div
          style={{ backgroundColor: leftCard.bgColor }}
          className="flex absolute left-[-80px] sm:left-[-160px] z-10 rounded-2xl w-40 sm:w-96 h-[420px] items-center justify-center filter blur-sm select-none pointer-events-none transition-all"
        >
          <CardContent card={leftCard} blurred />
        </div>

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 z-30 p-2 rounded-full bg-[#9093F5] bg-opacity-80 hover:bg-opacity-100 transition"
          style={{ top: "calc(50% - 20px)" }}
        >
          <ArrowLeftCircle size={36} className="text-white" />
        </button>

        {/* Main card */}
        <div
          style={{ backgroundColor: currentCard.bgColor }}
          className="z-20 rounded-3xl p-6 sm:p-8 w-full max-w-[340px] sm:max-w-2xl min-h-[450px] shadow-lg flex flex-col-reverse sm:flex-row items-center justify-between gap-6 text-white transition-all"
        >
          <CardContent card={currentCard} />
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 z-30 p-2 rounded-full bg-[#9093F5] bg-opacity-80 hover:bg-opacity-100 transition"
          style={{ top: "calc(50% - 20px)" }}
        >
          <ArrowRightCircle size={36} className="text-white" />
        </button>

        {/* Right blurred card */}
        <div
          style={{ backgroundColor: rightCard.bgColor }}
          className="flex absolute right-[-80px] sm:right-[-160px] z-10 rounded-2xl w-40 sm:w-96 h-[420px] items-center justify-center filter blur-sm select-none pointer-events-none transition-all"
        >
          <CardContent card={rightCard} blurred />
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
      <div
        className={`flex flex-col gap-4 w-full ${blurred ? "opacity-60" : ""}`}
      >
        <h3 className="text-lg sm:text-3xl font-bold leading-snug">{card.title}</h3>
        <p className="text-sm sm:text-lg font-semibold">{card.subtitle}</p>
        <h4 className="text-xs sm:text-base">{card.cta}</h4>
      </div>
      <div className="w-full mt-4">
        <img
          src={card.image}
          alt={card.title}
          className={`rounded-lg w-full object-cover h-auto max-h-[450px] sm:max-h-[400px] ${
            blurred ? "opacity-40" : ""
          }`}
          draggable={false}
        />
      </div>
    </>
  );
}

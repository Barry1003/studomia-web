import { ArrowRight, ArrowRightCircle } from "lucide-react";
import useCarousel from "./carousel";

const slides = [
  {
    title: "👩‍🎓 Discover Your Strengths. Define Your Future.",
    subtitle:
      "Receive personalized learning and career recommendations tailored to your strengths.",
    buttonText: "Take the First Step",
    image: "/section1.1.png",
  },
  {
    title: "🚀 Navigate Your Learning-to-Career Path With Confidence",
    subtitle:
      "📈 Track progress, 🎯 unlock new opportunities, and gain 🧠 skill-based insights—every step of your journey, from school to success.",
    buttonText: "Explore My Path",
    image: "/section1.2.png",
  },
  {
    title: "🧭 Progress Faster With Personalized Support",
    subtitle:
      "🤝 Get guidance, 🛠 tools, and 📬 feedback tailored to your learning goals. 📚 Build confidence and skills with every step.",
    buttonText: "Get Support Now",
    image: "/section1.3.png",
  },
];

export default function LearnerSection() {
  const { index, setIndex, handleNext, handlePrev, onSwipeX } = useCarousel(slides.length);

  // Type guard: prevent out-of-bounds errors
  if (index < 0 || index >= slides.length) return null;

  const current = slides[index];

  return (
    <section
      className="w-full px-6 py-16 md:py-24 bg-white flex flex-col md:flex-row items-center justify-between"
      {...onSwipeX}
    >
      {/* Left - Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center relative">
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        ></button>

        <img
          src={current.image}
          alt={current.title}
          className="w-[500px] max-w-full object-contain h-[601.517px]"
          draggable={false}
        />
      </div>

      {/* Right - Text Content */}
      <div className="md:w-1/2 text-center md:text-left max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 leading-tight">
          <span className="inline-flex items-center gap-2">{current.title}</span>
          <br />
          Define Your Future.
        </h2>

        <p className="text-gray-600 text-lg mb-6">{current.subtitle}</p>

        <button className="px-4 py-2 hover:bg-blue-700 text-black font-semibold rounded-full border border-[#9093F5] transition duration-300 flex items-center justify-center">
          {current.buttonText}
          <ArrowRight size={18} />
        </button>

        {/* Pagination */}
        <div className="mt-6 flex gap-2 justify-center items-center md:justify-start">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-[88px] h-1 rounded-full cursor-pointer transition-all duration-300 ${
                i === index ? "bg-[#8F5AAF]" : "bg-[#0D15EA]"
              }`}
            ></span>
          ))}

          <button onClick={handleNext}>
            <ArrowRightCircle size={30} className="text-blue-700 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

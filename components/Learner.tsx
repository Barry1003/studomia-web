 import { ArrowRight } from 'lucide-react';
import React from 'react';
const LearnerSection = () => {
  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src="../Public/Section1.1.png"  
          alt="Mobile UI for Learners"
          className="  w-[500px] object-contain h-auto"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left max-w-xl">

        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 leading-tight">
          <span className="inline-flex items-center gap-2">
            👩‍🎓 Discover Your Strengths.
          </span>
          <br />
          Define Your Future.
        </h2>

        <p className="text-gray-600 text-lg mb-6">
          Receive personalized learning and career recommendations tailored to your strengths.
        </p>

        <button className="px-4 py-2 hover:bg-blue-700 text-black font-semibold rounded-full border  rounded-full text-black outline-[#9093F5] border-[#9093F5] transition duration-300 flex items-center justify-center">
          Take the First Step
          <ArrowRight size={18} />
        </button>

        {/* Progress indicator */}
        <div className="mt-6 flex gap-2 justify-center md:justify-start">
          <span className="w-10 h-1 bg-blue-700 rounded-full"></span>
          <span className="w-10 h-1 bg-purple-400 rounded-full"></span>
          <span className="w-10 h-1 bg-blue-700 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default LearnerSection;

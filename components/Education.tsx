import React from "react";

export default function Educator() {
  return (
    <section className="bg-white py-12">
      {/* Top badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
          <span className="mr-2">🧱</span>
          For Educators, Teachers, Trainers & Coaches
        </span>
      </div>

      {/* Hero card */}
      <div className="mx-auto flex gap-4 relative max-w-5xl px-6">
          <div className="flex flex-col justify-center items-center space-y-4 px-4">
            {/* Vertical markers */}
            <div className="w-1 h-14 bg-green-400 rounded"></div>
            <div className="w-1 h-14 bg-gray-200 bg-opacity-50 rounded"></div>
            <div className="w-1 h-14 bg-gray-200 bg-opacity-30 rounded"></div>
            <div className="w-1 h-14 bg-gray-200 bg-opacity-20 rounded"></div>
          </div>
        <div className="relative bg-[#0D15EA] w-[1066px]  rounded-2xl overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-10 md:pl-36">
            {/* Left text */}
            <div className="text-white space-y-6">
              <h1 className="text-xl md:text-3xl font-bold leading-snug">
                Teachers, Coaches, <br />
                Trainers Facilitators <br />
                And Mentors
              </h1>
              <p className="text-lg opacity-80">
                Improve Your Practice With The Educator Portfolio
              </p>
              <p className="text-base opacity-80">
                Join as An Educator, Teacher or Mentor
              </p>
            </div>

            {/* Right placeholder */}
            <div className="w-full h-56 md:h-78 bg-blue-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

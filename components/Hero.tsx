import { MoveDown } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className="row w-full">
      <div className=" px-8 py-12 flex flex-row gap-8 justify-center items-start h-[600px]">
        {/* Left Text Section */}
        <div className="w-[40%] h-full flex flex-col justify-between items-start space-y-4">  
          {/* Tagline Row */}
          <ul className="flex flex-row gap-4">
            <li className="text-lg font-bold text-[#068A41]">🎯 Learn Smarter.</li>
            <li className="text-lg font-bold text-[#068A41]">Create Freely.</li>
            <li className="text-lg font-bold text-[#068A41]">Thrive Together.</li>
          </ul>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-[#0D15EA] leading-snug">
            🌍 Studomia is your all-in-one platform for learning, collaboration, and real-world growth.
          </h1>

          {/* Paragraph */}
          <p className="text-lg font-semibold text-[#272E3D]">
            Join the all-in-one platform that helps learners, creatives, educators, and institutions unlock their potential. Now onboarding early users across Africa.
          </p>

          {/* Email Form */}
          <form className="flex flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border w-[307px] px-4 py-4 rounded-full text-black outline-[#9093F5] border-[#9093F5]"
            />
            <button className="text-xl font-semibold text-white rounded-full px-8 py-2 bg-[#2BF388] w-[194px] h-[50px]">
              Join Free
            </button>
          </form>

          {/* Privacy Note */}
          <small className="font-semibold text-[#272E3D]">
            By proceeding you agree to our Platform Terms & Privacy Notice.
          </small>

          {/* Explore Section */}
          <div className="flex flex-row items-center gap-1">
            <MoveDown className="text-[#0D15EA] stroke-[5] h-4" />
            <p className="text-[#068A41] text-lg">Explore</p>
          </div>
        </div>
  
        {/* Right Image Section */}
        <div className="w-[60%] h-full flex justify-center items-center">
          <img 
            src="../public/Frame.png" 
            alt="Hero Image" 
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
